// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckResultDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Bucket name.
   * 
   * @example
   * oss-tmp
   */
  bucket?: string;
  /**
   * @remarks
   * Media type.
   * 
   * @example
   * 1
   */
  mediaType?: number;
  /**
   * @remarks
   * Object name.
   * 
   * @example
   * 1748396909030.jpg
   */
  object?: string;
  /**
   * @remarks
   * Parent task ID.
   * 
   * @example
   * P_RZQ66T
   */
  parentTaskId?: string;
  /**
   * @remarks
   * Query request ID.
   * 
   * @example
   * 62E97001-1255-50A9-8E1E-4FD05473D952
   */
  queryRequestId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Service code.
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

