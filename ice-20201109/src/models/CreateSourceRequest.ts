// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The source configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * “[{
   * 	"sourceGroupName": "mySourceGroup-1",
   * 	"relativePath": "group1/hls.m3u8",
   * 	"type": "hls"
   * }]”
   */
  httpPackageConfigurations?: string;
  /**
   * @remarks
   * The name of the source location.
   * 
   * This parameter is required.
   * 
   * @example
   * MySourceLocation
   */
  sourceLocationName?: string;
  /**
   * @remarks
   * The name of the source.
   * 
   * This parameter is required.
   * 
   * @example
   * MyVodSource
   */
  sourceName?: string;
  /**
   * @remarks
   * The source type. Valid values: vodSource and liveSource.
   * 
   * This parameter is required.
   * 
   * @example
   * vodSource
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      httpPackageConfigurations: 'HttpPackageConfigurations',
      sourceLocationName: 'SourceLocationName',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpPackageConfigurations: 'string',
      sourceLocationName: 'string',
      sourceName: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

