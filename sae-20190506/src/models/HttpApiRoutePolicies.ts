// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiRoutePoliciesFallback } from "./HttpApiRoutePoliciesFallback";
import { HttpApiRoutePoliciesRetry } from "./HttpApiRoutePoliciesRetry";
import { HttpApiRoutePoliciesTimeout } from "./HttpApiRoutePoliciesTimeout";


export class HttpApiRoutePolicies extends $dara.Model {
  fallback?: HttpApiRoutePoliciesFallback;
  retry?: HttpApiRoutePoliciesRetry;
  timeout?: HttpApiRoutePoliciesTimeout;
  static names(): { [key: string]: string } {
    return {
      fallback: 'Fallback',
      retry: 'Retry',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallback: HttpApiRoutePoliciesFallback,
      retry: HttpApiRoutePoliciesRetry,
      timeout: HttpApiRoutePoliciesTimeout,
    };
  }

  validate() {
    if(this.fallback && typeof (this.fallback as any).validate === 'function') {
      (this.fallback as any).validate();
    }
    if(this.retry && typeof (this.retry as any).validate === 'function') {
      (this.retry as any).validate();
    }
    if(this.timeout && typeof (this.timeout as any).validate === 'function') {
      (this.timeout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

