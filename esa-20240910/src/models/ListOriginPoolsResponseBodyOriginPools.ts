// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOriginPoolsResponseBodyOriginPoolsOrigins } from "./ListOriginPoolsResponseBodyOriginPoolsOrigins";
import { ListOriginPoolsResponseBodyOriginPoolsReferences } from "./ListOriginPoolsResponseBodyOriginPoolsReferences";


export class ListOriginPoolsResponseBodyOriginPools extends $dara.Model {
  /**
   * @remarks
   * Whether the origin pool is enabled:
   * 
   * - true: Enabled;
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * ID of the origin pool.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * Name of the origin pool, unique within a site.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * Information about the origins added to the origin pool.
   */
  origins?: ListOriginPoolsResponseBodyOriginPoolsOrigins[];
  /**
   * @remarks
   * Domain name assigned to the origin pool, which can be used as the origin address for records under the site.
   * 
   * @example
   * pool1.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * Number of load balancers that reference this origin pool.
   * 
   * @example
   * 5
   */
  referenceLBCount?: number;
  /**
   * @remarks
   * Reference information for the origin pool. The origin pool is considered referenced when it is configured in a load balancer or set as the origin for a record.
   */
  references?: ListOriginPoolsResponseBodyOriginPoolsReferences;
  /**
   * @remarks
   * ID of the site to which the origin pool belongs.
   * 
   * @example
   * 216558609793952
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
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      origins: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPoolsOrigins },
      recordName: 'string',
      referenceLBCount: 'number',
      references: ListOriginPoolsResponseBodyOriginPoolsReferences,
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

