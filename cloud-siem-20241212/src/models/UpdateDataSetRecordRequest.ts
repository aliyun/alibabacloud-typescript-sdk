// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSetRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the uploaded dataset file.
   * 
   * @example
   * cloudsiem-dataset/1358117679873357_174338773****.csv
   */
  dataSetFileName?: string;
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * dataset-10iy8mbifnb4gniv****
   */
  dataSetId?: string;
  /**
   * @remarks
   * The content of the dataset records, in JSON array format.
   * 
   * @example
   * [{\\"ip\\":\\"1.1.1.1\\",\\"userid\\":\\"1234\\",\\"name\\":\\"a12401\\"},
   *  {\\"ip\\":\\"2.2.2.2\\",\\"userid\\":\\"33333\\",\\"name\\":\\"a12401\\"}]
   */
  dataSetRecords?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is located. Select a region for the management center based on the region of your asset. Valid values:
   * 
   * - cn-hangzhou: The asset is in the Chinese mainland.
   * 
   * - ap-southeast-1: The asset is in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can use this parameter to switch to the perspective of a specific member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetFileName: 'DataSetFileName',
      dataSetId: 'DataSetId',
      dataSetRecords: 'DataSetRecords',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetFileName: 'string',
      dataSetId: 'string',
      dataSetRecords: 'string',
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

