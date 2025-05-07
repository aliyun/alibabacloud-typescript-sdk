// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JaegerConfig } from "./JaegerConfig";


export class TracingConfig extends $dara.Model {
  jaegerConfig?: JaegerConfig;
  params?: any;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jaegerConfig: 'jaegerConfig',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jaegerConfig: JaegerConfig,
      params: 'any',
      type: 'string',
    };
  }

  validate() {
    if(this.jaegerConfig && typeof (this.jaegerConfig as any).validate === 'function') {
      (this.jaegerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

