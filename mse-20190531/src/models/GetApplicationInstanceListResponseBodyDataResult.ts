// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationInstanceListResponseBodyDataResultTags } from "./GetApplicationInstanceListResponseBodyDataResultTags";


export class GetApplicationInstanceListResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The node IP address.
   * 
   * @example
   * 10.1.2.3
   */
  ip?: string;
  /**
   * @remarks
   * The application port.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The node tags.
   */
  tags?: GetApplicationInstanceListResponseBodyDataResultTags[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'string',
      tags: { 'type': 'array', 'itemType': GetApplicationInstanceListResponseBodyDataResultTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

