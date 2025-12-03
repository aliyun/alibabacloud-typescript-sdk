// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkItemWorkFlowStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 例：5e70xxxxxxcd000xxxxe96
   */
  spaceIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Project
   */
  spaceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Req
   */
  workitemCategoryIdentifier?: string;
  /**
   * @example
   * 例：5e7xxxxb3cd3711dd6xxx2c
   */
  workitemTypeIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      spaceIdentifier: 'spaceIdentifier',
      spaceType: 'spaceType',
      workitemCategoryIdentifier: 'workitemCategoryIdentifier',
      workitemTypeIdentifier: 'workitemTypeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceIdentifier: 'string',
      spaceType: 'string',
      workitemCategoryIdentifier: 'string',
      workitemTypeIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

