// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonitorDataRequest extends $dara.Model {
  /**
   * @example
   * {"start":1689245180581,"end":1689246950582,"queries":[{"metric":"aliyunes.elasticsearch.index.docs.count","aggregator":"sum","downsample":"avg","tags":{"resource":"{appName}"},"filters":[],"granularity":"auto"}]}
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

