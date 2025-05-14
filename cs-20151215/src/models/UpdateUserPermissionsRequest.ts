// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserPermissionsRequestBody } from "./UpdateUserPermissionsRequestBody";


export class UpdateUserPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateUserPermissionsRequestBody[];
  /**
   * @remarks
   * The authorization method. Valid values:
   * 
   * *   `apply`: The global update mode. Overwrites all existing permissions of the RAM user or RAM role on the cluster. You must specify all the permissions you want to grant to the RAM user or RAM role in the request parameters when you call this operation.
   * *   `delete`: The deletion mode. Revokes only the cluster permissions specified in the request, preserving other existing permissions of the RAM user or RAM role.
   * *   `patch`: The incremental mode. Adds only the cluster permissions specified in the request, preserving other existing permissions of the RAM user or RAM role.
   * 
   * Default value: `apply`.
   * 
   * @example
   * apply
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': UpdateUserPermissionsRequestBody },
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

