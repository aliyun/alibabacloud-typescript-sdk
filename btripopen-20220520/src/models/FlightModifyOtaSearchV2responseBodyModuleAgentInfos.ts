// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleAgentInfosAttributeShowInfoMapValue } from "./ModuleAgentInfosAttributeShowInfoMapValue";
import { FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosCabinClassInfo } from "./FlightModifyOtaSearchV2responseBodyModuleAgentInfosCabinClassInfo";
import { FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTO } from "./FlightModifyOtaSearchV2responseBodyModuleAgentInfosPriceInfoDto";


export class FlightModifyOtaSearchV2ResponseBodyModuleAgentInfos extends $dara.Model {
  attributeShowInfoMap?: { [key: string]: ModuleAgentInfosAttributeShowInfoMapValue[] };
  bestDiscount?: number;
  cabinClassInfo?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosCabinClassInfo;
  cabinCode?: number;
  cabinName?: string;
  itemId?: string;
  modifyTypeDesc?: string;
  modifyTypeName?: string;
  priceInfoDTO?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTO;
  quantity?: number;
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
      attributeShowInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleAgentInfosAttributeShowInfoMapValue } },
      bestDiscount: 'number',
      cabinClassInfo: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosCabinClassInfo,
      cabinCode: 'number',
      cabinName: 'string',
      itemId: 'string',
      modifyTypeDesc: 'string',
      modifyTypeName: 'string',
      priceInfoDTO: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfosPriceInfoDTO,
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

