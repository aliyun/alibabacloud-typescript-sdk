// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalPageItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://baijiahao.baidu.com/s?id=1787881554557805096
   */
  link?: string;
  /**
   * @example
   * 100km/h-0制动能力上，仅有33.3m，不黑不吹，单看这个，小米SU7确实表现不错。而续航方面，101kWh电池容量，实现CLTC续航800km，还有现5分钟补能220km，15分钟补能510km的800V高压平台。而在...
   */
  snippet?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 小米SU7售价22.99万元起 高管亲自辟谣：发布前不会有价格
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'link',
      snippet: 'snippet',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      snippet: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

