// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end date of the certificate bound to the cloud resource. The value is a timestamp in seconds.
   * 
   * @example
   * 1737795520000
   */
  certEndTime?: string;
  /**
   * @remarks
   * The ID of the certificate bound to the cloud resource.
   * 
   * @example
   * 12433121
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate bound to the cloud resource.
   * 
   * @example
   * shop.amsaudio.cn
   */
  certName?: string;
  /**
   * @remarks
   * The start date of the certificate bound to the cloud resource. The value is a timestamp in seconds.
   * 
   * @example
   * 1706259520000
   */
  certStartTime?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to access cloud resources.
   * 
   * >  This parameter is returned only when you deploy certificates to cloud services of third-party clouds.
   * 
   * @example
   * 1234
   */
  cloudAccessId?: string;
  /**
   * @remarks
   * The cloud service provider.
   * 
   * Valid values:
   * 
   * *   Tencent
   * *   Huawei
   * *   Aws
   * *   aliyun
   * 
   * @example
   * aliyun
   */
  cloudName?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * ALB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The region ID of the cloud service provider to which the cloud resource belongs.
   * 
   * @example
   * cn-hangzhou
   */
  cloudRegion?: string;
  /**
   * @remarks
   * Indicates whether the cloud resource is the default resource. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * 0
   */
  defaultResource?: number;
  /**
   * @remarks
   * The domain name bound to the cloud resource.
   * 
   * @example
   * www.tkgeo.ru
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether HTTPS is enabled for the cloud resource. Valid values:
   * 
   * *   **1**: yes.
   * *   **0**: no.
   * 
   * @example
   * 1
   */
  enableHttps?: number;
  /**
   * @remarks
   * The time when the cloud resource was created. The time is a timestamp in seconds.
   * 
   * @example
   * 1673423339000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the cloud resource was last modified. The time is a timestamp in seconds.
   * 
   * @example
   * 1696911946000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the cloud resource.
   * 
   * @example
   * 2356
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * nlb-rv05agjc97ovm14il5
   */
  instanceId?: string;
  /**
   * @remarks
   * The listener ID of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * lsn-jiugof6t23et66lsnc@443
   */
  listenerId?: string;
  /**
   * @remarks
   * The listening port of the cloud resource.
   * 
   * >  This parameter is returned only when the value of CloudProduct is SLB, NLB, ALB, or GA.
   * 
   * @example
   * 8047
   */
  listenerPort?: string;
  /**
   * @remarks
   * The region ID of the cloud resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the cloud resource.
   * 
   * @example
   * BUY
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether an Alibaba Cloud SSL certificate is used. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * >  This parameter is required only when you deploy certificates to services of multiple clouds.
   * 
   * @example
   * 1
   */
  useSsl?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1666884372152785
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certEndTime: 'CertEndTime',
      certId: 'CertId',
      certName: 'CertName',
      certStartTime: 'CertStartTime',
      cloudAccessId: 'CloudAccessId',
      cloudName: 'CloudName',
      cloudProduct: 'CloudProduct',
      cloudRegion: 'CloudRegion',
      defaultResource: 'DefaultResource',
      domain: 'Domain',
      enableHttps: 'EnableHttps',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      regionId: 'RegionId',
      status: 'Status',
      useSsl: 'UseSsl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certEndTime: 'string',
      certId: 'number',
      certName: 'string',
      certStartTime: 'string',
      cloudAccessId: 'string',
      cloudName: 'string',
      cloudProduct: 'string',
      cloudRegion: 'string',
      defaultResource: 'number',
      domain: 'string',
      enableHttps: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      listenerId: 'string',
      listenerPort: 'string',
      regionId: 'string',
      status: 'string',
      useSsl: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data returned for the request.
   */
  data?: ListCloudResourcesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 440
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListCloudResourcesResponseBodyData },
      requestId: 'string',
      showSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

