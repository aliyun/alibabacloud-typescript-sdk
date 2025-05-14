// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelAssemblySourceLocation extends $dara.Model {
  arn?: string;
  baseUrl?: string;
  gmtCreate?: string;
  gmtModified?: string;
  segmentDeliveryConfigurations?: string;
  sourceLocationName?: string;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      baseUrl: 'BaseUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      segmentDeliveryConfigurations: 'SegmentDeliveryConfigurations',
      sourceLocationName: 'SourceLocationName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      baseUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      segmentDeliveryConfigurations: 'string',
      sourceLocationName: 'string',
      state: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

