// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmonMonitorDataResponseBodyResult extends $dara.Model {
  /**
   * @example
   * { "1586249280": 465.1980465119913, "1586249300": 213.45243650423305 }
   */
  dps?: { [key: string]: any };
  /**
   * @example
   * 1.0
   */
  integrity?: number;
  /**
   * @example
   * 1522127381471
   */
  messageWatermark?: number;
  /**
   * @example
   * elasticbuild.elasticsearch.source.total_doc_count
   */
  metric?: string;
  /**
   * @example
   * 10
   */
  summary?: number;
  /**
   * @example
   * {"taskName":"et-xxx","userId":"123456"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dps: 'dps',
      integrity: 'integrity',
      messageWatermark: 'messageWatermark',
      metric: 'metric',
      summary: 'summary',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrity: 'number',
      messageWatermark: 'number',
      metric: 'string',
      summary: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.dps) {
      $dara.Model.validateMap(this.dps);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

