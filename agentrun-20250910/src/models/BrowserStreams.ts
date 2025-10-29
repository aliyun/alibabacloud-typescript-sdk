// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BrowserAutomationStream } from "./BrowserAutomationStream";
import { BrowserLiveViewStream } from "./BrowserLiveViewStream";


export class BrowserStreams extends $dara.Model {
  /**
   * @example
   * {}
   */
  automationStream?: BrowserAutomationStream;
  /**
   * @example
   * {}
   */
  liveViewStream?: BrowserLiveViewStream;
  static names(): { [key: string]: string } {
    return {
      automationStream: 'automationStream',
      liveViewStream: 'liveViewStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automationStream: BrowserAutomationStream,
      liveViewStream: BrowserLiveViewStream,
    };
  }

  validate() {
    if(this.automationStream && typeof (this.automationStream as any).validate === 'function') {
      (this.automationStream as any).validate();
    }
    if(this.liveViewStream && typeof (this.liveViewStream as any).validate === 'function') {
      (this.liveViewStream as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

