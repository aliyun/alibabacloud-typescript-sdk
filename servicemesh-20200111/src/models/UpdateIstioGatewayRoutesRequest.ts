// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate extends $dara.Model {
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage extends $dara.Model {
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort extends $dara.Model {
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
  percentage?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage;
  static names(): { [key: string]: string } {
    return {
      httpStatus: 'HttpStatus',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatus: 'number',
      percentage: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbortPercentage,
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage extends $dara.Model {
  /**
   * @remarks
   * The percentage of requests to which the delay fault is injected, which is expressed as a decimal.
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay extends $dara.Model {
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
  percentage?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage;
  static names(): { [key: string]: string } {
    return {
      fixedDelay: 'FixedDelay',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedDelay: 'string',
      percentage: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelayPercentage,
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault extends $dara.Model {
  /**
   * @remarks
   * The configurations for aborting requests with specified error codes.
   */
  abort?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort;
  /**
   * @remarks
   * The duration to delay a request.
   */
  delay?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay;
  static names(): { [key: string]: string } {
    return {
      abort: 'Abort',
      delay: 'Delay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abort: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultAbort,
      delay: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFaultDelay,
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect extends $dara.Model {
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror extends $dara.Model {
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage extends $dara.Model {
  /**
   * @remarks
   * The percentage of requests that are mirrored to another destination except for the original destination, which is expressed as a decimal.
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities extends $dara.Model {
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries extends $dara.Model {
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
  retryRemoteLocalities?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities;
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
      retryRemoteLocalities: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetriesRetryRemoteLocalities,
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite extends $dara.Model {
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions extends $dara.Model {
  /**
   * @remarks
   * The virtual service that defines traffic routing.
   */
  delegate?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate;
  /**
   * @remarks
   * The configurations of fault injection.
   */
  fault?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault;
  /**
   * @remarks
   * The HTTP redirection rule.
   */
  HTTPRedirect?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect;
  /**
   * @remarks
   * The configurations for mirroring HTTP traffic to another destination in addition to forwarding requests to the specified destination.
   */
  mirror?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror;
  /**
   * @remarks
   * The percentage of requests that are mirrored to another destination except for the original destination.
   */
  mirrorPercentage?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage;
  /**
   * @remarks
   * The configurations of retries for failed requests.
   */
  retries?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries;
  /**
   * @remarks
   * The configurations for rewriting the virtual service.
   */
  rewrite?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite;
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
      delegate: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsDelegate,
      fault: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsFault,
      HTTPRedirect: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsHTTPRedirect,
      mirror: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirror,
      mirrorPercentage: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsMirrorPercentage,
      retries: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRetries,
      rewrite: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptionsRewrite,
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders extends $dara.Model {
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes extends $dara.Model {
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI extends $dara.Model {
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
   * The matching mode for the routing rule. Valid values:
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequest extends $dara.Model {
  /**
   * @remarks
   * The request headers to be matched.
   */
  headers?: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders[];
  /**
   * @remarks
   * The ports.
   */
  ports?: number[];
  /**
   * @remarks
   * The matching rule for Transport Layer Security (TLS) traffic.
   */
  TLSMatchAttributes?: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes[];
  /**
   * @remarks
   * The matching rule for URIs.
   */
  URI?: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI;
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
      headers: { 'type': 'array', 'itemType': UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestHeaders },
      ports: { 'type': 'array', 'itemType': 'number' },
      TLSMatchAttributes: { 'type': 'array', 'itemType': UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestTLSMatchAttributes },
      URI: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequestURI,
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort extends $dara.Model {
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination extends $dara.Model {
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
   * The port of the destination service.
   * 
   * >  If the destination service of the route has only one port, this field can be left empty. If the destination service has multiple ports, you must specify the port number.
   */
  port?: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort;
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
      port: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestinationPort,
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

export class UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinations extends $dara.Model {
  /**
   * @remarks
   * The unique endpoint of the destination service to which the specified requests are sent.
   */
  destination?: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination;
  /**
   * @remarks
   * The weight of the service subset.
   * 
   * @example
   * 80
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinationsDestination,
      weight: 'number',
    };
  }

  validate() {
    if(this.destination && typeof (this.destination as any).validate === 'function') {
      (this.destination as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIstioGatewayRoutesRequestGatewayRoute extends $dara.Model {
  /**
   * @remarks
   * The list of requested domain names.
   */
  domains?: string[];
  /**
   * @remarks
   * The advanced settings for routing HTTP traffic.
   */
  HTTPAdvancedOptions?: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions;
  /**
   * @remarks
   * The matching rules for traffic routing.
   */
  matchRequest?: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequest;
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
   * The original YAML file of the virtual service that is serialized in a JSON string.
   * 
   * @example
   * {}
   */
  rawVSRoute?: any;
  /**
   * @remarks
   * The endpoints of destination services for Layer 4 weighted routing.
   */
  routeDestinations?: UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinations[];
  /**
   * @remarks
   * The name of the routing rule.
   * 
   * @example
   * reviews-v2-routes
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
      matchRequest: 'MatchRequest',
      namespace: 'Namespace',
      rawVSRoute: 'RawVSRoute',
      routeDestinations: 'RouteDestinations',
      routeName: 'RouteName',
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      HTTPAdvancedOptions: UpdateIstioGatewayRoutesRequestGatewayRouteHTTPAdvancedOptions,
      matchRequest: UpdateIstioGatewayRoutesRequestGatewayRouteMatchRequest,
      namespace: 'string',
      rawVSRoute: 'any',
      routeDestinations: { 'type': 'array', 'itemType': UpdateIstioGatewayRoutesRequestGatewayRouteRouteDestinations },
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

export class UpdateIstioGatewayRoutesRequest extends $dara.Model {
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
   * The information about the routing rule to be updated for the ASM gateway.
   */
  gatewayRoute?: UpdateIstioGatewayRoutesRequestGatewayRoute;
  /**
   * @remarks
   * The name of the ASM gateway.
   * 
   * @example
   * ingressgateway
   */
  istioGatewayName?: string;
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
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
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
      gatewayRoute: 'GatewayRoute',
      istioGatewayName: 'IstioGatewayName',
      priority: 'Priority',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayRoute: UpdateIstioGatewayRoutesRequestGatewayRoute,
      istioGatewayName: 'string',
      priority: 'number',
      serviceMeshId: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.gatewayRoute && typeof (this.gatewayRoute as any).validate === 'function') {
      (this.gatewayRoute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

