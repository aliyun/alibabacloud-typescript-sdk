// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnnotationMissionTagInfoListRequestAnnotationMissionTagInfoList extends $dara.Model {
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * 标签描述
   */
  annotationMissionTagInfoDescription?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * bdbff6a5-1f68-4b41-8d37-6ff805ce165a
   */
  annotationMissionTagInfoId?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 标签
   */
  annotationMissionTagInfoName?: string;
  /**
   * @remarks
   * Indicates whether to delete the tag.
   * 
   * > Set this parameter to true to delete the tag. Set it to false to add the tag.
   * 
   * @example
   * true
   */
  delete?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * bdbff6a5-1f68-4b41-8d37-6ff805ce165a
   */
  instanceId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
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
  /**
   * @remarks
   * The list of tags.
   * 
   * > This parameter has the same function as AnnotationMissionTagInfoListJsonString. Specify either this parameter or AnnotationMissionTagInfoListJsonString.
   */
  annotationMissionTagInfoList?: SaveAnnotationMissionTagInfoListRequestAnnotationMissionTagInfoList[];
  /**
   * @remarks
   * The JSON-formatted data of the tags.
   * 
   * > The parameters in the JSON string are the same as those in AnnotationMissionTagInfoList. Specify either this parameter or AnnotationMissionTagInfoList.
   * 
   * @example
   * [{"delete":false,				"InstanceId":"00b37342-e759-4fe5-b296-aef775933af0",					"AnnotationMissionTagInfoName":"测试数据1",					"AnnotationMissionTagInfoDescription":"测试"}]
   */
  annotationMissionTagInfoListJsonString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether to restore the default tag values.
   * 
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

