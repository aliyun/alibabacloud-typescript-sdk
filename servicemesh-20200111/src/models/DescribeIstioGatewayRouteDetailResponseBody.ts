// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsDelegate extends $dara.Model {
  /**
   * @remarks
   * The name of the virtual service.
   * 
   * @example
   * reviews
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the virtual service belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbortPercentage extends $dara.Model {
  /**
   * @remarks
   * The percentage of requests that are mirrored to another destination except for the original destination, which is expressed as a decimal.
   * 
   * @example
   * 0.1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbort extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatus?: number;
  /**
   * @remarks
   * The percentage of requests that are aborted with the specified error code.
   */
  percentage?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbortPercentage;
  static names(): { [key: string]: string } {
    return {
      httpStatus: 'HttpStatus',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatus: 'number',
      percentage: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbortPercentage,
    };
  }

  validate() {
    if(this.percentage && typeof (this.percentage as any).validate === 'function') {
      (this.percentage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelayPercentage extends $dara.Model {
  /**
   * @remarks
   * The percentage of requests that are aborted with the specified error code, which is expressed as a decimal.
   * 
   * @example
   * 0.1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelay extends $dara.Model {
  /**
   * @remarks
   * The duration for request delay is expressed as 2 raised to the power of x. You must specify the value of x.
   * 
   * @example
   * 3
   */
  exponentialDelay?: string;
  /**
   * @remarks
   * The fixed duration for request delay.
   * 
   * @example
   * 5s
   */
  fixedDelay?: string;
  /**
   * @remarks
   * The percentage of requests to which the delay fault is injected.
   */
  percentage?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelayPercentage;
  static names(): { [key: string]: string } {
    return {
      exponentialDelay: 'ExponentialDelay',
      fixedDelay: 'FixedDelay',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exponentialDelay: 'string',
      fixedDelay: 'string',
      percentage: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelayPercentage,
    };
  }

  validate() {
    if(this.percentage && typeof (this.percentage as any).validate === 'function') {
      (this.percentage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFault extends $dara.Model {
  /**
   * @remarks
   * The configurations for aborting requests with specified error codes.
   */
  abort?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbort;
  /**
   * @remarks
   * The duration to delay a request.
   */
  delay?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelay;
  static names(): { [key: string]: string } {
    return {
      abort: 'Abort',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abort: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultAbort,
      delay: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFaultDelay,
    };
  }

  validate() {
    if(this.abort && typeof (this.abort as any).validate === 'function') {
      (this.abort as any).validate();
    }
    if(this.delay && typeof (this.delay as any).validate === 'function') {
      (this.delay as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsHTTPRedirect extends $dara.Model {
  /**
   * @remarks
   * The value to be used to overwrite the value of the Authority or Host header during redirection.
   * 
   * @example
   * newratings.default.svc.cluster.local
   */
  authority?: string;
  /**
   * @remarks
   * The HTTP status code to be used to indicate URL redirection. Default value: 301.
   * 
   * @example
   * 301
   */
  redirectCode?: number;
  /**
   * @remarks
   * The value to be used to overwrite the URL path during redirection.
   * 
   * @example
   * /v1/getProductRatings
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      redirectCode: 'RedirectCode',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      redirectCode: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirror extends $dara.Model {
  /**
   * @remarks
   * The name of the service defined in the service registry.
   * 
   * @example
   * reviews.default.svc.cluster.local
   */
  host?: string;
  /**
   * @remarks
   * The name of the service subset.
   * 
   * @example
   * v1
   */
  subset?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      subset: 'Subset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      subset: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirrorPercentage extends $dara.Model {
  /**
   * @remarks
   * The percentage of requests that are aborted with the specified error code, which is expressed as a decimal.
   * 
   * @example
   * 0.2
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetriesRetryRemoteLocalities extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow retries to other localities. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  value?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetries extends $dara.Model {
  /**
   * @remarks
   * The number of retries that are allowed for a request.
   * 
   * @example
   * 3
   */
  attempts?: number;
  /**
   * @remarks
   * The timeout period for each retry.
   * 
   * @example
   * 2s
   */
  perTryTimeout?: string;
  /**
   * @remarks
   * The condition for retries. Example: `connect-failure,refused-stream,503`.
   * 
   * @example
   * connect-failure,refused-stream,503
   */
  retryOn?: string;
  /**
   * @remarks
   * Specifies whether to allow retries to other localities.
   */
  retryRemoteLocalities?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetriesRetryRemoteLocalities;
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      perTryTimeout: 'PerTryTimeout',
      retryOn: 'RetryOn',
      retryRemoteLocalities: 'RetryRemoteLocalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      perTryTimeout: 'string',
      retryOn: 'string',
      retryRemoteLocalities: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetriesRetryRemoteLocalities,
    };
  }

  validate() {
    if(this.retryRemoteLocalities && typeof (this.retryRemoteLocalities as any).validate === 'function') {
      (this.retryRemoteLocalities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRewrite extends $dara.Model {
  /**
   * @remarks
   * The value to be used to overwrite the value of the Authority or Host header.
   * 
   * @example
   * newratings.default.svc.cluster.local
   */
  authority?: string;
  /**
   * @remarks
   * The value to be used to overwrite the path or prefix of the URI.
   * 
   * @example
   * /v1/getProductRatings
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * The virtual service that defines traffic routing.
   */
  delegate?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsDelegate;
  /**
   * @remarks
   * The configurations of fault injection.
   */
  fault?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFault;
  /**
   * @remarks
   * The HTTP redirection rule.
   */
  HTTPRedirect?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsHTTPRedirect;
  /**
   * @remarks
   * The configurations for mirroring HTTP traffic to another destination in addition to forwarding requests to the specified destination.
   */
  mirror?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirror;
  /**
   * @remarks
   * The percentage of requests that are aborted with the specified error code.
   */
  mirrorPercentage?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirrorPercentage;
  /**
   * @remarks
   * The configurations of retries for failed requests.
   */
  retries?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetries;
  /**
   * @remarks
   * The configurations for rewriting the virtual service.
   */
  rewrite?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRewrite;
  /**
   * @remarks
   * The timeout period for requests.
   * 
   * @example
   * 5s
   */
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      delegate: 'Delegate',
      fault: 'Fault',
      HTTPRedirect: 'HTTPRedirect',
      mirror: 'Mirror',
      mirrorPercentage: 'MirrorPercentage',
      retries: 'Retries',
      rewrite: 'Rewrite',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegate: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsDelegate,
      fault: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsFault,
      HTTPRedirect: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsHTTPRedirect,
      mirror: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirror,
      mirrorPercentage: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsMirrorPercentage,
      retries: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRetries,
      rewrite: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptionsRewrite,
      timeout: 'string',
    };
  }

  validate() {
    if(this.delegate && typeof (this.delegate as any).validate === 'function') {
      (this.delegate as any).validate();
    }
    if(this.fault && typeof (this.fault as any).validate === 'function') {
      (this.fault as any).validate();
    }
    if(this.HTTPRedirect && typeof (this.HTTPRedirect as any).validate === 'function') {
      (this.HTTPRedirect as any).validate();
    }
    if(this.mirror && typeof (this.mirror as any).validate === 'function') {
      (this.mirror as any).validate();
    }
    if(this.mirrorPercentage && typeof (this.mirrorPercentage as any).validate === 'function') {
      (this.mirrorPercentage as any).validate();
    }
    if(this.retries && typeof (this.retries as any).validate === 'function') {
      (this.retries as any).validate();
    }
    if(this.rewrite && typeof (this.rewrite as any).validate === 'function') {
      (this.rewrite as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestHeaders extends $dara.Model {
  /**
   * @remarks
   * The header value to be matched.
   * 
   * @example
   * v1
   */
  matchingContent?: string;
  /**
   * @remarks
   * The matching mode for the header value. Valid values:
   * 
   * *   `exact`: exact match
   * *   `prefix`: match by prefix
   * *   `regex`: match by regular expression
   * 
   * @example
   * exact
   */
  matchingMode?: string;
  /**
   * @remarks
   * The header key to be matched.
   * 
   * @example
   * x-request-id
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      matchingContent: 'MatchingContent',
      matchingMode: 'MatchingMode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingContent: 'string',
      matchingMode: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestTLSMatchAttributes extends $dara.Model {
  /**
   * @remarks
   * The Server Name Indication (SNI) values to be matched.
   */
  SNIHosts?: string[];
  /**
   * @remarks
   * The TLS port.
   * 
   * @example
   * 443
   */
  TLSPort?: number;
  static names(): { [key: string]: string } {
    return {
      SNIHosts: 'SNIHosts',
      TLSPort: 'TLSPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SNIHosts: { 'type': 'array', 'itemType': 'string' },
      TLSPort: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SNIHosts)) {
      $dara.Model.validateArray(this.SNIHosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestURI extends $dara.Model {
  /**
   * @remarks
   * The content to be matched.
   * 
   * @example
   * /ratings/v2/
   */
  matchingContent?: string;
  /**
   * @remarks
   * The matching mode. Valid values:
   * 
   * *   `exact`: exact match
   * *   `prefix`: match by prefix
   * *   `regex`: match by regular expression
   * 
   * @example
   * prefix
   */
  matchingMode?: string;
  static names(): { [key: string]: string } {
    return {
      matchingContent: 'MatchingContent',
      matchingMode: 'MatchingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingContent: 'string',
      matchingMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequest extends $dara.Model {
  /**
   * @remarks
   * The request headers to be matched.
   */
  headers?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestHeaders[];
  /**
   * @remarks
   * The ports.
   */
  ports?: number[];
  /**
   * @remarks
   * The matching rules for Transport Layer Security (TLS) traffic.
   */
  TLSMatchAttributes?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestTLSMatchAttributes[];
  /**
   * @remarks
   * The matching rule for URIs.
   */
  URI?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestURI;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      ports: 'Ports',
      TLSMatchAttributes: 'TLSMatchAttributes',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestHeaders },
      ports: { 'type': 'array', 'itemType': 'number' },
      TLSMatchAttributes: { 'type': 'array', 'itemType': DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestTLSMatchAttributes },
      URI: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequestURI,
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.TLSMatchAttributes)) {
      $dara.Model.validateArray(this.TLSMatchAttributes);
    }
    if(this.URI && typeof (this.URI as any).validate === 'function') {
      (this.URI as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestinationPort extends $dara.Model {
  /**
   * @remarks
   * The ports of the specified hosts to which the traffic is routed.
   * 
   * @example
   * 443
   */
  number?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestination extends $dara.Model {
  /**
   * @remarks
   * The name of the service defined in the service registry.
   * 
   * @example
   * reviews
   */
  host?: string;
  /**
   * @remarks
   * The ports of the specified hosts from which the traffic is routed.
   */
  port?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestinationPort;
  /**
   * @remarks
   * The name of the service subset.
   * 
   * @example
   * v1
   */
  subset?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      subset: 'Subset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestinationPort,
      subset: 'string',
    };
  }

  validate() {
    if(this.port && typeof (this.port as any).validate === 'function') {
      (this.port as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersRequest extends $dara.Model {
  /**
   * @remarks
   * The values to be added to the header key.
   * 
   * @example
   * key
   */
  add?: { [key: string]: any };
  /**
   * @remarks
   * The header value to be deleted.
   */
  remove?: string[];
  /**
   * @remarks
   * The header key to be used to overwrite the original header key.
   */
  set?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      remove: 'Remove',
      set: 'Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      remove: { 'type': 'array', 'itemType': 'string' },
      set: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.add) {
      $dara.Model.validateMap(this.add);
    }
    if(Array.isArray(this.remove)) {
      $dara.Model.validateArray(this.remove);
    }
    if(this.set) {
      $dara.Model.validateMap(this.set);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersResponse extends $dara.Model {
  /**
   * @remarks
   * The values to be added to the header key.
   * 
   * @example
   * key
   */
  add?: { [key: string]: any };
  /**
   * @remarks
   * The header value to be deleted.
   */
  remove?: string[];
  /**
   * @remarks
   * The header key to be used to overwrite the original header key.
   * 
   * @example
   * key
   */
  set?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      remove: 'Remove',
      set: 'Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      remove: { 'type': 'array', 'itemType': 'string' },
      set: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.add) {
      $dara.Model.validateMap(this.add);
    }
    if(Array.isArray(this.remove)) {
      $dara.Model.validateArray(this.remove);
    }
    if(this.set) {
      $dara.Model.validateMap(this.set);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeaders extends $dara.Model {
  /**
   * @remarks
   * The request header to be matched.
   */
  request?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersRequest;
  /**
   * @remarks
   * The processing of the headers of the response that is to be returned.
   */
  response?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersResponse;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
      response: 'Response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersRequest,
      response: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeadersResponse,
    };
  }

  validate() {
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinations extends $dara.Model {
  /**
   * @remarks
   * The unique endpoint of the destination service to which the specified requests are sent.
   */
  destination?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestination;
  /**
   * @remarks
   * The list of the request headers to be matched.
   */
  headers?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeaders;
  /**
   * @remarks
   * The traffic weight. Valid values: 1 to 100.
   * 
   * @example
   * 80
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      headers: 'Headers',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsDestination,
      headers: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinationsHeaders,
      weight: 'number',
    };
  }

  validate() {
    if(this.destination && typeof (this.destination as any).validate === 'function') {
      (this.destination as any).validate();
    }
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBodyRouteDetail extends $dara.Model {
  /**
   * @remarks
   * Domain list.
   */
  domains?: string[];
  /**
   * @remarks
   * The advanced settings for routing HTTP traffic.
   */
  HTTPAdvancedOptions?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptions;
  /**
   * @remarks
   * If the value is true, the original YAML file contains features that are not supported on the current interface.
   * 
   * @example
   * true
   */
  hasUnsafeFeatures?: boolean;
  /**
   * @remarks
   * The matching rules for traffic routing.
   */
  matchRequest?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequest;
  /**
   * @remarks
   * The original YAML file of the virtual service that is serialized into a JSON string.
   * 
   * @example
   * {}
   */
  rawVSRoute?: string;
  /**
   * @remarks
   * The endpoints of destination services for Layer 4 weighted routing.
   */
  routeDestinations?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinations[];
  /**
   * @remarks
   * The name of the routing rule.
   * 
   * @example
   * demo-route
   */
  routeName?: string;
  /**
   * @remarks
   * The type of the traffic to be routed. Valid values: `HTTP`, `TLS`, and `TCP`.
   * 
   * @example
   * HTTP
   */
  routeType?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      HTTPAdvancedOptions: 'HTTPAdvancedOptions',
      hasUnsafeFeatures: 'HasUnsafeFeatures',
      matchRequest: 'MatchRequest',
      rawVSRoute: 'RawVSRoute',
      routeDestinations: 'RouteDestinations',
      routeName: 'RouteName',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      HTTPAdvancedOptions: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailHTTPAdvancedOptions,
      hasUnsafeFeatures: 'boolean',
      matchRequest: DescribeIstioGatewayRouteDetailResponseBodyRouteDetailMatchRequest,
      rawVSRoute: 'string',
      routeDestinations: { 'type': 'array', 'itemType': DescribeIstioGatewayRouteDetailResponseBodyRouteDetailRouteDestinations },
      routeName: 'string',
      routeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(this.HTTPAdvancedOptions && typeof (this.HTTPAdvancedOptions as any).validate === 'function') {
      (this.HTTPAdvancedOptions as any).validate();
    }
    if(this.matchRequest && typeof (this.matchRequest as any).validate === 'function') {
      (this.matchRequest as any).validate();
    }
    if(Array.isArray(this.routeDestinations)) {
      $dara.Model.validateArray(this.routeDestinations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRouteDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the routing rule.
   * 
   * @example
   * demo route
   */
  description?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The priority of the routing rule. The value of this parameter is an integer. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the routing rule.
   */
  routeDetail?: DescribeIstioGatewayRouteDetailResponseBodyRouteDetail;
  /**
   * @remarks
   * The status of the routing rule. Valid values:
   * 
   * *   `0`: The routing rule is valid.
   * *   `1`: The routing rule is invalid.
   * *   `2`: An error occurs during the creation or update of the routing rule.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      priority: 'Priority',
      requestId: 'RequestId',
      routeDetail: 'RouteDetail',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
      priority: 'number',
      requestId: 'string',
      routeDetail: DescribeIstioGatewayRouteDetailResponseBodyRouteDetail,
      status: 'number',
    };
  }

  validate() {
    if(this.routeDetail && typeof (this.routeDetail as any).validate === 'function') {
      (this.routeDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

