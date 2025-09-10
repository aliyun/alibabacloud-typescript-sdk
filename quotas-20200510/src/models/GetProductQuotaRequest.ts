// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductQuotaRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * >  This parameter is required for cloud services that support dimensions. You must specify both `Dimensions.N.Key` and `Dimensions.N.Value`. The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service. The following cloud services support dimensions: ECS whose service code is ecs, Enterprise Distributed Application Service (EDAS) whose service code is edas, ECS Quotas by Instance Type whose service code is ecs-spec, and Auto Scaling whose service code is ess.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * >  This parameter is required for cloud services that support dimensions. You must specify both `Dimensions.N.Key` and `Dimensions.N.Value`. The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service. The following cloud services support dimensions: ECS whose service code is ecs, EDAS whose service code is edas, ECS Quotas by Instance Type whose service code is ecs-spec, and Auto Scaling whose service code is ess.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The quota dimensions.
   * 
   * @example
   * {\\"regionId\\":\\"cn-beijing\\"}
   */
  dimensions?: GetProductQuotaRequestDimensions[];
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * >  To query a quota ID of an Alibaba Cloud service, call the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation and check the value of `QuotaActionCode` in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': GetProductQuotaRequestDimensions },
      productCode: 'string',
      quotaActionCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

