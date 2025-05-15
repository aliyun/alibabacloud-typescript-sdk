// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServicesResponseBodyServicesServiceInfosSoftwares } from "./ListServicesResponseBodyServicesServiceInfosSoftwares";


export class ListServicesResponseBodyServicesServiceInfos extends $dara.Model {
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
   * *   zh-CN: Chinese.
   * *   en-US: English.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * Docker Community Edition
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * Docker Community Edition (CE) is a free version of the Docker project, aimed at developers, enthusiasts, and individuals and organizations who want to use container technology.
   */
  shortDescription?: string;
  softwares?: ListServicesResponseBodyServicesServiceInfosSoftwares[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfosSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

