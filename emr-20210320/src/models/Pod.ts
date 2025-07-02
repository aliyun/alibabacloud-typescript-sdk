// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Pod extends $dara.Model {
  message?: string;
  podName?: string;
  podStatus?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      podName: 'PodName',
      podStatus: 'PodStatus',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      podName: 'string',
      podStatus: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

