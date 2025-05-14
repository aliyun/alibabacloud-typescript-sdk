// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Source extends $dara.Model {
  arn?: string;
  gmtCreate?: string;
  gmtModified?: string;
  httpPackageConfigurations?: string;
  sourceLocationName?: string;
  sourceName?: string;
  sourceType?: string;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      httpPackageConfigurations: 'HttpPackageConfigurations',
      sourceLocationName: 'SourceLocationName',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      httpPackageConfigurations: 'string',
      sourceLocationName: 'string',
      sourceName: 'string',
      sourceType: 'string',
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

