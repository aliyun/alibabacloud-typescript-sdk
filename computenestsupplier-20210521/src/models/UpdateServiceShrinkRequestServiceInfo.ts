// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServiceShrinkRequestServiceInfoAgreements } from "./UpdateServiceShrinkRequestServiceInfoAgreements";
import { UpdateServiceShrinkRequestServiceInfoSoftwares } from "./UpdateServiceShrinkRequestServiceInfoSoftwares";


export class UpdateServiceShrinkRequestServiceInfo extends $dara.Model {
  /**
   * @remarks
   * Protocol document information about the service.
   */
  agreements?: UpdateServiceShrinkRequestServiceInfoAgreements[];
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
   * @example
   * Metric Name, filled in when Type is ComputeNestBill or ComputeNestPrometheus
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * The URL of the detailed description of the service.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The list of the software in the service.
   */
  softwares?: UpdateServiceShrinkRequestServiceInfoSoftwares[];
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
      agreements: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfoAgreements },
      image: 'string',
      locale: 'string',
      longDescriptionUrl: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': UpdateServiceShrinkRequestServiceInfoSoftwares },
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

