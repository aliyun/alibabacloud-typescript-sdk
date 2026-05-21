// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTraceDiagnoseResponseBody extends $dara.Model {
  /**
   * @example
   * 64D28B53-5902-409B-94F6-FD46680144FE
   */
  requestId?: string;
  /**
   * @example
   * http://cdn.dns-detect.alicdn.com/diagnose/?id=xxxxxxx
   */
  tip?: string;
  /**
   * @example
   * http://cdn.dns-detect.alicdn.com/diagnose_v2?id=5d97ac9b&token=WFji65gy2mGNM11bD929%2BCMoyI6mbk2deRR9hOC6INH%2FoYbccQZQcvEn4wc%2FDPHlTshxRSAa5HokX%2BabItBpJ0FdnteROssomXqgIdjHpM46L%2BbaIeweZfsWG6QnbXT5n7O5APMyc%2Fe8d1o9PwwB429Ccks1FU1AfjNZfvBcLeo%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tip: 'Tip',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tip: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

