// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckResultDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket. Note: This parameter is actually required. If it is not provided, the API returns a 400 error.
   * 
   * @example
   * oss-tmp
   */
  bucket?: string;
  /**
   * @remarks
   * The media asset type. Note: This parameter is actually required. If it is not provided, the API returns a 400 error.
   * 
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @remarks
   * The object name. Note: This parameter is actually required. If it is not provided, the API returns a 400 error.
   * 
   * @example
   * 1748396909030.jpg
   */
  object?: string;
  /**
   * @remarks
   * The parent task ID.
   * 
   * @example
   * P_RZQ66T
   */
  parentTaskId?: string;
  /**
   * @remarks
   * The request ID of the query. Note: This parameter is actually required. If it is not provided, the API returns a 400 error.
   * 
   * @example
   * 62E97001-1255-50A9-8E1E-4FD05473D952
   */
  queryRequestId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The service code. Note: This parameter is actually required. If it is not provided, the API returns a 400 error.
   * 
   * @example
   * audio_media_detection_01
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      mediaType: 'MediaType',
      object: 'Object',
      parentTaskId: 'ParentTaskId',
      queryRequestId: 'QueryRequestId',
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      mediaType: 'number',
      object: 'string',
      parentTaskId: 'string',
      queryRequestId: 'string',
      regionId: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

