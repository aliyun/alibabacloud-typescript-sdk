// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommodityResponseBodyComponentsPropertiesPropertyValueList extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the attribute.
   * 
   * The returned information varies based on the commodity module.
   * 
   * @example
   * 1
   */
  orderIndex?: number;
  /**
   * @remarks
   * The content of the attribute.
   * 
   * The returned information varies based on the commodity module.
   * 
   * @example
   * 1 Month
   */
  text?: string;
  /**
   * @remarks
   * The message of the attribute.
   * 
   * The returned information varies based on the commodity module.
   * 
   * @example
   * 1 Month
   */
  tips?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * The returned information varies based on the commodity module.
   * 
   * @example
   * 1:Month
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      orderIndex: 'OrderIndex',
      text: 'Text',
      tips: 'Tips',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIndex: 'number',
      text: 'string',
      tips: 'string',
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

export class DescribeCommodityResponseBodyComponentsProperties extends $dara.Model {
  /**
   * @remarks
   * The code of the attribute.
   * 
   * The returned information varies based on the commodity module.
   * 
   * @example
   * ord_time
   */
  code?: string;
  /**
   * @remarks
   * The name of the attribute.
   * 
   * The returned information varies based on the commodity module.
   * 
   * @example
   * Duration
   */
  name?: string;
  /**
   * @remarks
   * The list of attribute values of the commodity module.
   * 
   * The returned information varies based on the commodity module.
   */
  propertyValueList?: DescribeCommodityResponseBodyComponentsPropertiesPropertyValueList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      propertyValueList: 'PropertyValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      propertyValueList: { 'type': 'array', 'itemType': DescribeCommodityResponseBodyComponentsPropertiesPropertyValueList },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValueList)) {
      $dara.Model.validateArray(this.propertyValueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * The code of the commodity module.
   * 
   * The returned information varies based on the commodity module.
   * 
   * @example
   * Duration
   */
  componentCode?: string;
  /**
   * @remarks
   * The name of the commodity module.
   * 
   * The returned information varies based on the commodity module.
   * 
   * @example
   * Duration
   */
  componentName?: string;
  /**
   * @remarks
   * The attributes of the commodity module.
   * 
   * The returned information varies based on the commodity module.
   */
  properties?: DescribeCommodityResponseBodyComponentsProperties[];
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      componentName: 'ComponentName',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      componentName: 'string',
      properties: { 'type': 'array', 'itemType': DescribeCommodityResponseBodyComponentsProperties },
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommodityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * Examples for the China site (aliyun.com):
   * 
   * *   **ga_gapluspre_public_cn**: GA instance.
   * *   **ga_plusbwppre_public_cn**: basic bandwidth plan.
   * 
   * Examples for the international site (alibabacloud.com):
   * 
   * *   **ga_pluspre_public_intl**: GA instance.
   * *   **ga_bwppreintl_public_intl**: basic bandwidth plan.
   * 
   * @example
   * ga_gapluspre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name of the commodity.
   * 
   * @example
   * Global Accelerator_Instance Type (Subscription)
   */
  commodityName?: string;
  /**
   * @remarks
   * The information about the commodity modules.
   * 
   * The returned information varies based on the commodity.
   */
  components?: DescribeCommodityResponseBodyComponents[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      components: 'Components',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityName: 'string',
      components: { 'type': 'array', 'itemType': DescribeCommodityResponseBodyComponents },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

