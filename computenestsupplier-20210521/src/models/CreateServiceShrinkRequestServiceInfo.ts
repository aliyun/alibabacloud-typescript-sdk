// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServiceShrinkRequestServiceInfoAgreements } from "./CreateServiceShrinkRequestServiceInfoAgreements";
import { CreateServiceShrinkRequestServiceInfoSoftwares } from "./CreateServiceShrinkRequestServiceInfoSoftwares";


export class CreateServiceShrinkRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * Protocol document information about the service.
   */
  agreements?: CreateServiceShrinkRequestServiceInfoAgreements[];
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The URL of the detailed description of the service.
   * 
   * @example
   * http://description.tidb.oss.url
   */
  longDescriptionUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * TiDB Database
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * TiDB是A公司自主设计、研发的开源分布式关系型数据库。
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
   */
  softwares?: CreateServiceShrinkRequestServiceInfoSoftwares[];
  static names(): { [key: string]: string } {
    return {
      agreements: 'Agreements',
      image: 'Image',
      locale: 'Locale',
      longDescriptionUrl: 'LongDescriptionUrl',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreements: { 'type': 'array', 'itemType': CreateServiceShrinkRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': CreateServiceShrinkRequestServiceInfoSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.agreements)) {
      $dara.Model.validateArray(this.agreements);
    }
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

