// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnnotationMissionTagInfoListRequestAnnotationMissionTagInfoList extends $dara.Model {
  annotationMissionTagInfoDescription?: string;
  /**
   * @remarks
   * tag id
   */
  annotationMissionTagInfoId?: string;
  annotationMissionTagInfoName?: string;
  /**
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @example
   * bdbff6a5-1f68-4b41-8d37-6ff805ce165a
   */
  instanceId?: string;
  /**
   * @example
   * bdbff6a5-1f68-4b41-8d37-6ff805ce165a
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      annotationMissionTagInfoDescription: 'AnnotationMissionTagInfoDescription',
      annotationMissionTagInfoId: 'AnnotationMissionTagInfoId',
      annotationMissionTagInfoName: 'AnnotationMissionTagInfoName',
      delete: 'Delete',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionTagInfoDescription: 'string',
      annotationMissionTagInfoId: 'string',
      annotationMissionTagInfoName: 'string',
      delete: 'boolean',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAnnotationMissionTagInfoListRequest extends $dara.Model {
  annotationMissionTagInfoList?: SaveAnnotationMissionTagInfoListRequestAnnotationMissionTagInfoList[];
  /**
   * @example
   * []
   */
  annotationMissionTagInfoListJsonString?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  reset?: boolean;
  static names(): { [key: string]: string } {
    return {
      annotationMissionTagInfoList: 'AnnotationMissionTagInfoList',
      annotationMissionTagInfoListJsonString: 'AnnotationMissionTagInfoListJsonString',
      instanceId: 'InstanceId',
      reset: 'Reset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionTagInfoList: { 'type': 'array', 'itemType': SaveAnnotationMissionTagInfoListRequestAnnotationMissionTagInfoList },
      annotationMissionTagInfoListJsonString: 'string',
      instanceId: 'string',
      reset: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.annotationMissionTagInfoList)) {
      $dara.Model.validateArray(this.annotationMissionTagInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

