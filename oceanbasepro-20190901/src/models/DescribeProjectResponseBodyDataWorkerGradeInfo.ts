// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectResponseBodyDataWorkerGradeInfo extends $dara.Model {
  autoRenewal?: boolean;
  chargeType?: string;
  destRegion?: string;
  destType?: string;
  endTime?: string;
  expired?: boolean;
  gmtCreate?: string;
  grade?: string;
  id?: string;
  name?: string;
  sourceRegion?: string;
  sourceType?: string;
  spec?: string;
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      endTime: 'EndTime',
      expired: 'Expired',
      gmtCreate: 'GmtCreate',
      grade: 'Grade',
      id: 'Id',
      name: 'Name',
      sourceRegion: 'SourceRegion',
      sourceType: 'SourceType',
      spec: 'Spec',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      destRegion: 'string',
      destType: 'string',
      endTime: 'string',
      expired: 'boolean',
      gmtCreate: 'string',
      grade: 'string',
      id: 'string',
      name: 'string',
      sourceRegion: 'string',
      sourceType: 'string',
      spec: 'string',
      specName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

