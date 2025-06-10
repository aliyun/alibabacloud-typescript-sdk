// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVosMetrics } from "./ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVosMetrics";


export class ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVos extends $dara.Model {
  /**
   * @example
   * FREE
   */
  busy?: string;
  /**
   * @example
   * true
   */
  checked?: boolean;
  /**
   * @example
   * 10.52.169.25
   */
  key?: string;
  metrics?: ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVosMetrics;
  /**
   * @example
   * fasle
   */
  offline?: boolean;
  /**
   * @example
   * 1
   */
  size?: number;
  /**
   * @example
   * pod
   */
  starter?: string;
  /**
   * @example
   * 1.12.5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      busy: 'Busy',
      checked: 'Checked',
      key: 'Key',
      metrics: 'Metrics',
      offline: 'Offline',
      size: 'Size',
      starter: 'Starter',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      busy: 'string',
      checked: 'boolean',
      key: 'string',
      metrics: ReadSchedulerxDesignateInfoResponseBodyDataDesignateDetailVosMetrics,
      offline: 'boolean',
      size: 'number',
      starter: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

