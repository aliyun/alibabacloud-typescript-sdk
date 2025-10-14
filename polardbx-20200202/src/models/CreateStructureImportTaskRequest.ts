// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStructureImportTaskRequest extends $dara.Model {
  /**
   * @example
   * [{\\"schemaName\\":\\"transfer_test\\",\\"tableList\\":[]}]
   */
  config?: string;
  /**
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
      slinkTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

