// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcRelationItem extends $dara.Model {
  /**
   * @example
   * 企业服务
   */
  company?: string;
  /**
   * @example
   * 中驿
   */
  developer?: string;
  /**
   * @example
   * category
   */
  pbcName?: string;
  /**
   * @example
   * 2022-04-01T00:00:00.000Z
   */
  pbcVersion?: string;
  /**
   * @example
   * 资产市场
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      company: 'company',
      developer: 'developer',
      pbcName: 'pbcName',
      pbcVersion: 'pbcVersion',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      company: 'string',
      developer: 'string',
      pbcName: 'string',
      pbcVersion: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

