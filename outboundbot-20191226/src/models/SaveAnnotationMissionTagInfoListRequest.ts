// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnnotationMissionTagInfoListRequestAnnotationMissionTagInfoList extends $dara.Model {
  /**
   * @remarks
   * The tag description.
   * 
   * @example
   * Tag description
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
   * Tag
   */
  annotationMissionTagInfoName?: string;
  /**
   * @remarks
   * Specifies whether to delete the tag.
   * 
   * > Set this parameter to true to delete the tag, or false to add the tag.
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
   * The tag list.
   * 
   * > This parameter is the same as the AnnotationMissionTagInfoListJsonString parameter. Specify either one.
   */
  annotationMissionTagInfoList?: SaveAnnotationMissionTagInfoListRequestAnnotationMissionTagInfoList[];
  /**
   * @remarks
   * The tag JSON data.
   * 
   * > The parameters in the JSON are the same as those in the AnnotationMissionTagInfoList parameter. Specify either this parameter or AnnotationMissionTagInfoList.
   * 
   * @example
   * [{"delete":false,				"InstanceId":"00b37342-e759-4fe5-b296-aef775933af0",					"AnnotationMissionTagInfoName":"TestData1",					"AnnotationMissionTagInfoDescription":"Test"}]
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
   * Specifies whether to restore the default tag values.
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

