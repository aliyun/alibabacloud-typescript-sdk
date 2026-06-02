// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAnnotationMissionTagInfoListResponseBodyDataAnnotationMissionTagInfoList extends $dara.Model {
  annotationMissionTagInfoDescription?: string;
  /**
   * @example
   * e1ee87ea-ebad-4079-aebb-1c56a4ef0c06
   */
  annotationMissionTagInfoId?: string;
  annotationMissionTagInfoName?: string;
  /**
   * @example
   * false
   */
  delete?: boolean;
  /**
   * @example
   * 3c3b8d1d-deff-48d9-9318-addc80ae5b1e
   */
  instanceId?: string;
  /**
   * @example
   * DING_ORG_dingbd9daecdb7aaed3bffe93478753d9884
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

export class GetAnnotationMissionTagInfoListResponseBodyData extends $dara.Model {
  annotationMissionTagInfoList?: GetAnnotationMissionTagInfoListResponseBodyDataAnnotationMissionTagInfoList[];
  /**
   * @example
   * CDR \\"job-efbaeefc-4d45-4e79-83f7-b33b0769c969\\" doesn\\"t exists.
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      annotationMissionTagInfoList: 'AnnotationMissionTagInfoList',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionTagInfoList: { 'type': 'array', 'itemType': GetAnnotationMissionTagInfoListResponseBodyDataAnnotationMissionTagInfoList },
      message: 'string',
      success: 'boolean',
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

export class GetAnnotationMissionTagInfoListResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAnnotationMissionTagInfoListResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * CDR \\"job-efbaeefc-4d45-4e79-83f7-b33b0769c969\\" doesn\\"t exists.
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAnnotationMissionTagInfoListResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

