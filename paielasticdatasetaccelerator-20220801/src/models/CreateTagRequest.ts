// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dataset_version
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * inst-my1tk3jggooi5uwks
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v0.1.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      resourceId: 'string',
      resourceType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

