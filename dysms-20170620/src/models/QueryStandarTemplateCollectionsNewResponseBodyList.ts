// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryStandarTemplateCollectionsNewResponseBodyListFcPartnerTemplateDTO } from "./QueryStandarTemplateCollectionsNewResponseBodyListFcPartnerTemplateDto";


export class QueryStandarTemplateCollectionsNewResponseBodyList extends $dara.Model {
  fcPartnerTemplateDTO?: QueryStandarTemplateCollectionsNewResponseBodyListFcPartnerTemplateDTO[];
  static names(): { [key: string]: string } {
    return {
      fcPartnerTemplateDTO: 'FcPartnerTemplateDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcPartnerTemplateDTO: { 'type': 'array', 'itemType': QueryStandarTemplateCollectionsNewResponseBodyListFcPartnerTemplateDTO },
    };
  }

  validate() {
    if(Array.isArray(this.fcPartnerTemplateDTO)) {
      $dara.Model.validateArray(this.fcPartnerTemplateDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

