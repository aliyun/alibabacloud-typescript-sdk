// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSetRecordRequest extends $dara.Model {
  /**
   * @example
   * cloudsiem-dataset/1358117679873357_174338773****.csv
   */
  dataSetFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dataset-10iy8mbifnb4gniv****
   */
  dataSetId?: string;
  /**
   * @example
   * [{\\"ip\\":\\"1.1.1.1\\",\\"userid\\":\\"1234\\",\\"name\\":\\"a12401\\"},
   *  {\\"ip\\":\\"2.2.2.2\\",\\"userid\\":\\"33333\\",\\"name\\":\\"a12401\\"}]
   */
  dataSetRecords?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

