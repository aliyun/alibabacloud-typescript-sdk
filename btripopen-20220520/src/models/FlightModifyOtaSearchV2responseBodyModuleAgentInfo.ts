// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleAgentInfoAttributeShowInfoMapValue } from "./ModuleAgentInfoAttributeShowInfoMapValue";
import { FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoCabinClassInfo } from "./FlightModifyOtaSearchV2responseBodyModuleAgentInfoCabinClassInfo";
import { FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTO } from "./FlightModifyOtaSearchV2responseBodyModuleAgentInfoPriceInfoDto";


export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfo extends $dara.Model {
  attributeShowInfoMap?: { [key: string]: ModuleAgentInfoAttributeShowInfoMapValue[] };
  /**
   * @example
   * 10
   */
  bestDiscount?: number;
  cabinClassInfo?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoCabinClassInfo;
  /**
   * @example
   * 1
   */
  cabinCode?: number;
  cabinName?: string;
  /**
   * @remarks
   * item_id
   * 
   * @example
   * c85124c527fc4b26b86d0c043ddc08d3_0
   */
  itemId?: string;
  modifyTypeDesc?: string;
  modifyTypeName?: string;
  priceInfoDTO?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTO;
  /**
   * @example
   * 8
   */
  quantity?: number;
  /**
   * @example
   * true
   */
  supportChildTicket?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributeShowInfoMap: 'attribute_show_info_map',
      bestDiscount: 'best_discount',
      cabinClassInfo: 'cabin_class_info',
      cabinCode: 'cabin_code',
      cabinName: 'cabin_name',
      itemId: 'item_id',
      modifyTypeDesc: 'modify_type_desc',
      modifyTypeName: 'modify_type_name',
      priceInfoDTO: 'price_info_d_t_o',
      quantity: 'quantity',
      supportChildTicket: 'support_child_ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeShowInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleAgentInfoAttributeShowInfoMapValue } },
      bestDiscount: 'number',
      cabinClassInfo: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoCabinClassInfo,
      cabinCode: 'number',
      cabinName: 'string',
      itemId: 'string',
      modifyTypeDesc: 'string',
      modifyTypeName: 'string',
      priceInfoDTO: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfoPriceInfoDTO,
      quantity: 'number',
      supportChildTicket: 'boolean',
    };
  }

  validate() {
    if(this.attributeShowInfoMap) {
      $dara.Model.validateMap(this.attributeShowInfoMap);
    }
    if(this.cabinClassInfo && typeof (this.cabinClassInfo as any).validate === 'function') {
      (this.cabinClassInfo as any).validate();
    }
    if(this.priceInfoDTO && typeof (this.priceInfoDTO as any).validate === 'function') {
      (this.priceInfoDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

