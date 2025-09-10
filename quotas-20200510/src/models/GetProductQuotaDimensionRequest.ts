// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductQuotaDimensionRequestDependentDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension on which the quota dimension that you want to query is dependent.
   * 
   * > The value range of N varies based on the number of quota dimensions that are supported by the specified Alibaba Cloud service.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension on which the quota dimension that you want to query is dependent.
   * 
   * > The value range of N varies based on the number of quota dimensions that are supported by the specified Alibaba Cloud service.
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

export class GetProductQuotaDimensionRequest extends $dara.Model {
  /**
   * @remarks
   * The information about quota dimensions.
   */
  dependentDimensions?: GetProductQuotaDimensionRequestDependentDimensions[];
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * @example
   * regionId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > For more information, see [Alibaba Cloud services that support Quota Center](https://help.aliyun.com/document_detail/182368.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      dependentDimensions: 'DependentDimensions',
      dimensionKey: 'DimensionKey',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependentDimensions: { 'type': 'array', 'itemType': GetProductQuotaDimensionRequestDependentDimensions },
      dimensionKey: 'string',
      productCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependentDimensions)) {
      $dara.Model.validateArray(this.dependentDimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

