// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceShareRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false: Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-qSkW1HBY****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The new name of the resource share.
   * 
   * The name must be 1 to 50 characters in length.
   * 
   * The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * new
   */
  resourceShareName?: string;
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      resourceShareId: 'string',
      resourceShareName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

