// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Source extends $dara.Model {
  /**
   * @remarks
   * The ARN of the source.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:vodSource/mySourceLocation/mySource
   */
  arn?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-11-07T10:12:01Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-11-07T10:12:01Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The source configuration.
   * 
   * @example
   * [{
   * 	"sourceGroupName": "mySourceGroup-1",
   * 	"relativePath": "group1/hls.m3u8",
   * 	"packageType": "hls"
   * }]
   */
  httpPackageConfigurations?: string;
  /**
   * @remarks
   * The name of the source location.
   * 
   * @example
   * MySourceLocation
   */
  sourceLocationName?: string;
  /**
   * @remarks
   * The name of the source.
   * 
   * @example
   * MyVodSource
   */
  sourceName?: string;
  /**
   * @remarks
   * The source type. Valid values: vodSource and liveSource.
   * 
   * @example
   * vodSource
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the source. 0: normal. 1: deleted.
   * 
   * @example
   * 0
   */
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

