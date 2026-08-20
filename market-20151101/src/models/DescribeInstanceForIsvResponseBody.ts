// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceForIsvResponseBodyRelationalData extends $dara.Model {
  /**
   * @remarks
   * The service status. Valid values:
   * *   READYING: not started.
   * *   STARTED: in service.
   * *   CONFIRM: completed.
   * *   EXPIRED: expired.
   * *   CLOSED: released.
   * 
   * @example
   * STARTED
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceForIsvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The activation URL.
   * 
   * @example
   * https://*****.com
   */
  activeAddress?: string;
  /**
   * @remarks
   * The application information. The metric description of the parameters in the example is as follows:
   * 
   * username: the username.
   * passowrd: the password.
   * frontEndUrl: the frontend URL.
   * adminUrl: the administration URL.
   * 
   * @example
   * {"frontEndUrl":"https://****.aliyundoc.com","password":"Sjtv***","adminUrl":"https://****.aliyundoc.com","username":"aliyun***"}
   */
  appJson?: string;
  /**
   * @remarks
   * The automatic payment information for epoch-based products. A non-empty value indicates that you enable auto-renewal.
   * autoRenewCycle: Day, Month, or Year.
   * autoRenewDuration: the renewal epoch.
   * 
   * @example
   * {"autoRenewCycle":"Year","autoRenewDuration":1}
   */
  autoRenewal?: string;
  /**
   * @remarks
   * The time when the instance was activated (timestamp).
   * 
   * @example
   * 1570634021000
   */
  beganOn?: number;
  /**
   * @remarks
   * The business module. The metric description of the parameters in the example is as follows:
   * *   package_version: the version.
   * 
   * @example
   * {"package_version":"yuncode000111"}
   */
  componentJson?: string;
  /**
   * @remarks
   * The creation time (timestamp).
   * 
   * @example
   * 1570634018000
   */
  createdOn?: number;
  /**
   * @remarks
   * The expiration time (timestamp).
   * 
   * @example
   * 1602259200000
   */
  endOn?: number;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {"说明": "如有使用问题，请联系..."}
   */
  extendJson?: string;
  /**
   * @remarks
   * The host information. The metric description of the parameters in the example is as follows:
   * 
   * username: the username.
   * passowrd: the password.
   * ip: the host IP address.
   * innerIp: the internal network IP address of the host.
   * 
   * @example
   * {"password":"***","ip":"118.31.***.41","innerIp":"118.31.***.41","region":"","username":"***","beianInfo":""}
   */
  hostJson?: string;
  /**
   * @remarks
   * The image instance information.
   * imageId: the image ID.
   * instanceId: the instance ID.
   * ecsInstanceId: the ECS instance ID.
   * 
   * @example
   * {"imageId":"m-*******","instanceId":********}
   */
  imageJson?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1551111111
   */
  instanceId?: number;
  /**
   * @remarks
   * Indicates whether the instance is a trial instance.
   * 
   * @example
   * true
   */
  isTrial?: boolean;
  /**
   * @remarks
   * The activation code.
   * 
   * @example
   * xxxxxx
   */
  licenseCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 204211111111111
   */
  orderId?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmgj00**11
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * ***协同办公
   */
  productName?: string;
  /**
   * @remarks
   * The SKU code.
   * 
   * @example
   * cmgj00**11-prepay
   */
  productSkuCode?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * *   APP: application.
   * *   SERVIC: service.
   * *   MIRROR: image.
   * *   DOWNLOAD: download.
   * *   API_SERVICE: API.
   * *   DOCKER: Docker.
   * 
   * @example
   * APP
   */
  productType?: string;
  /**
   * @remarks
   * The relational information.
   */
  relationalData?: DescribeInstanceForIsvResponseBodyRelationalData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EF60BEC-****-****-****-270359FB54A7
   */
  requestId?: string;
  /**
   * @remarks
   * The business status. Different values are set based on the product type.
   * 
   * When ProductType is set to MIRROR:
   * *   PRODUCE: being provisioned.
   * *   USING: in use.
   * *   UNUSED: not in use.
   * *   EXPIRED: expired.
   * *   CLOSED: released.
   * 
   * When ProductType is set to SERVICE:
   * *   READYING: not started.
   * *   STARTED: in service.
   * *   CONFIRM: completed.
   * *   EXPIRED: expired.
   * *   CLOSED: released.
   * 
   * When ProductType is set to APP, DOWNLOAD, API_SERVICE, or DOCKER:
   * *   OPENING: being activated.
   * *   OPENED: activated.
   * *   EXPIRED: expired.
   * *   CLOSED: released.
   * 
   * @example
   * OPENED
   */
  status?: string;
  /**
   * @remarks
   * The service provider name.
   * 
   * @example
   * *****有限公司
   */
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddress: 'ActiveAddress',
      appJson: 'AppJson',
      autoRenewal: 'AutoRenewal',
      beganOn: 'BeganOn',
      componentJson: 'ComponentJson',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      imageJson: 'ImageJson',
      instanceId: 'InstanceId',
      isTrial: 'IsTrial',
      licenseCode: 'LicenseCode',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      relationalData: 'RelationalData',
      requestId: 'RequestId',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddress: 'string',
      appJson: 'string',
      autoRenewal: 'string',
      beganOn: 'number',
      componentJson: 'string',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      imageJson: 'string',
      instanceId: 'number',
      isTrial: 'boolean',
      licenseCode: 'string',
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      relationalData: DescribeInstanceForIsvResponseBodyRelationalData,
      requestId: 'string',
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(this.relationalData && typeof (this.relationalData as any).validate === 'function') {
      (this.relationalData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

