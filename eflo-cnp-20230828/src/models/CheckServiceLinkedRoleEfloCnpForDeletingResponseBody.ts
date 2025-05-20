// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckServiceLinkedRoleEfloCnpForDeletingResponseBodyResources } from "./CheckServiceLinkedRoleEfloCnpForDeletingResponseBodyResources";


export class CheckServiceLinkedRoleEfloCnpForDeletingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the SLR can be deleted. Valid values:
   * 
   * *   `true`: The SLR can be deleted.
   * *   `false`: The SLR cannot be deleted.
   * 
   * @example
   * True
   */
  deletable?: boolean;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 6C212C4A-2CB3-56E6-BA2F-1CE2B03C5C94
   */
  requestId?: string;
  /**
   * @remarks
   * The resources.
   */
  resources?: CheckServiceLinkedRoleEfloCnpForDeletingResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      deletable: 'Deletable',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletable: 'boolean',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': CheckServiceLinkedRoleEfloCnpForDeletingResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

