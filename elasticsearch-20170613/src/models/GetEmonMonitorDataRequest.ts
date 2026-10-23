// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmonMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The Grafana metric monitoring query conditions, including the query start time, metric expression, and metric query list.
   * 
   * @example
   * {"start":1522127381471,"queries":[{"metric":"elasticbuild.elasticsearch.source.total_doc_count","aggregator":"sum","downsample":"avg","tags":{"taskName":"et-testtsk","userId":"123456"},"granularity":"1m"}],"limit":"","end":1522129151000}
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

