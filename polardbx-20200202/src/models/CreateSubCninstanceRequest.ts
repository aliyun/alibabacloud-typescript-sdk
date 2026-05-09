// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCNInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hzravgpt8q****
   */
  DBInstanceName?: string;
  isAutoCreate?: boolean;
  /**
   * @example
   * ReadWrite
   */
  readType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      isAutoCreate: 'IsAutoCreate',
      readType: 'ReadType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      isAutoCreate: 'boolean',
      readType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

