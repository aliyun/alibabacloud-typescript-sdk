// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossCloudLevelsResponseBodyCrossCloudLevelList extends $dara.Model {
  /**
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @example
   * polar.mysql.g4.medium.c
   */
  levelCode?: string;
  levelName?: string;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      levelCode: 'LevelCode',
      levelName: 'LevelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      levelCode: 'string',
      levelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossCloudLevelsResponseBody extends $dara.Model {
  crossCloudLevelList?: DescribeCrossCloudLevelsResponseBodyCrossCloudLevelList[];
  /**
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      crossCloudLevelList: 'CrossCloudLevelList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossCloudLevelList: { 'type': 'array', 'itemType': DescribeCrossCloudLevelsResponseBodyCrossCloudLevelList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.crossCloudLevelList)) {
      $dara.Model.validateArray(this.crossCloudLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

