// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductQuotaDimensionRequestDependentDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension on which the target quota dimension depends.
   * 
   * > - The value of N depends on the number of quota dimensions on which the target quota dimension depends.
   * > - You must specify the key and value of a dependent quota dimension at the same time.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension on which the target quota dimension depends.
   * 
   * > - The value of N depends on the number of quota dimensions on which the target quota dimension depends.
   * > - You must specify the key and value of a dependent quota dimension at the same time.
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
   * The quota dimensions on which the target quota dimension depends.
   */
  dependentDimensions?: GetProductQuotaDimensionRequestDependentDimensions[];
  /**
   * @remarks
   * The key of the target quota dimension.
   * 
   * > If the target quota dimension has dependent quota dimensions, you must specify the keys and values of the dependent quota dimensions at the same time.
   * 
   * @example
   * zoneId
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The abbreviation of the cloud service.
   * 
   * > For more information about how to obtain the abbreviation of a cloud service, see the ProductCode parameter in [ListProducts](https://help.aliyun.com/document_detail/440555.html).
   * 
   * This parameter is required.
   * 
   * @example
   * disk
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

