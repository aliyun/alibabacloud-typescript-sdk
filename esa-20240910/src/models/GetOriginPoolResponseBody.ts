// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOriginPoolResponseBodyOrigins } from "./GetOriginPoolResponseBodyOrigins";
import { GetOriginPoolResponseBodyReferences } from "./GetOriginPoolResponseBodyReferences";


export class GetOriginPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether the origin pool is enabled:
   * 
   * - true: Enabled;
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Origin pool ID.
   * 
   * @example
   * 103852052519****
   */
  id?: number;
  /**
   * @remarks
   * Name of the origin pool. The name is unique under a single site.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * Information about the origins added to the origin pool.
   */
  origins?: GetOriginPoolResponseBodyOrigins[];
  /**
   * @remarks
   * The domain name assigned to the origin pool, which can be used as the origin address for records under the site.
   * 
   * @example
   * pool1.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The number of load balancers that reference this origin pool.
   * 
   * @example
   * 5
   */
  referenceLBCount?: number;
  /**
   * @remarks
   * Reference information for the origin pool. The origin pool is considered referenced when it is configured in a load balancer or set as the origin for a record.
   */
  references?: GetOriginPoolResponseBodyReferences;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * ID of the site to which the origin pool belongs.
   * 
   * @example
   * 21655860979****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      origins: 'Origins',
      recordName: 'RecordName',
      referenceLBCount: 'ReferenceLBCount',
      references: 'References',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      origins: { 'type': 'array', 'itemType': GetOriginPoolResponseBodyOrigins },
      recordName: 'string',
      referenceLBCount: 'number',
      references: GetOriginPoolResponseBodyReferences,
      requestId: 'string',
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.origins)) {
      $dara.Model.validateArray(this.origins);
    }
    if(this.references && typeof (this.references as any).validate === 'function') {
      (this.references as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

