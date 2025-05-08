// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats } from "./DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats";


export class DescribeDataDistResultResponseBodyDistResultsDistResult extends $dara.Model {
  /**
   * @remarks
   * The name of the data file.
   * 
   * @example
   * gcs-prod-websocket-eip-unicom
   */
  name?: string;
  /**
   * @remarks
   * The distribution status statistics.
   */
  statusStats?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats;
  /**
   * @remarks
   * The version number of the data file.
   * 
   * @example
   * standard
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      statusStats: 'StatusStats',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      statusStats: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats,
      version: 'string',
    };
  }

  validate() {
    if(this.statusStats && typeof (this.statusStats as any).validate === 'function') {
      (this.statusStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

