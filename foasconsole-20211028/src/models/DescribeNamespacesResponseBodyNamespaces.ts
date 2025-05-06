// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNamespacesResponseBodyNamespacesElasticResourceSpec } from "./DescribeNamespacesResponseBodyNamespacesElasticResourceSpec";
import { DescribeNamespacesResponseBodyNamespacesGuaranteedResourceSpec } from "./DescribeNamespacesResponseBodyNamespacesGuaranteedResourceSpec";
import { DescribeNamespacesResponseBodyNamespacesResourceSpec } from "./DescribeNamespacesResponseBodyNamespacesResourceSpec";
import { DescribeNamespacesResponseBodyNamespacesResourceUsed } from "./DescribeNamespacesResponseBodyNamespacesResourceUsed";
import { DescribeNamespacesResponseBodyNamespacesTags } from "./DescribeNamespacesResponseBodyNamespacesTags";


export class DescribeNamespacesResponseBodyNamespaces extends $dara.Model {
  elasticResourceSpec?: DescribeNamespacesResponseBodyNamespacesElasticResourceSpec;
  /**
   * @example
   * 1629879567394
   */
  gmtCreate?: number;
  /**
   * @example
   * 1629879567394
   */
  gmtModified?: number;
  guaranteedResourceSpec?: DescribeNamespacesResponseBodyNamespacesGuaranteedResourceSpec;
  ha?: boolean;
  /**
   * @example
   * ns-1
   */
  namespace?: string;
  resourceSpec?: DescribeNamespacesResponseBodyNamespacesResourceSpec;
  resourceUsed?: DescribeNamespacesResponseBodyNamespacesResourceUsed;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  tags?: DescribeNamespacesResponseBodyNamespacesTags[];
  static names(): { [key: string]: string } {
    return {
      elasticResourceSpec: 'ElasticResourceSpec',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      guaranteedResourceSpec: 'GuaranteedResourceSpec',
      ha: 'Ha',
      namespace: 'Namespace',
      resourceSpec: 'ResourceSpec',
      resourceUsed: 'ResourceUsed',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticResourceSpec: DescribeNamespacesResponseBodyNamespacesElasticResourceSpec,
      gmtCreate: 'number',
      gmtModified: 'number',
      guaranteedResourceSpec: DescribeNamespacesResponseBodyNamespacesGuaranteedResourceSpec,
      ha: 'boolean',
      namespace: 'string',
      resourceSpec: DescribeNamespacesResponseBodyNamespacesResourceSpec,
      resourceUsed: DescribeNamespacesResponseBodyNamespacesResourceUsed,
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyNamespacesTags },
    };
  }

  validate() {
    if(this.elasticResourceSpec && typeof (this.elasticResourceSpec as any).validate === 'function') {
      (this.elasticResourceSpec as any).validate();
    }
    if(this.guaranteedResourceSpec && typeof (this.guaranteedResourceSpec as any).validate === 'function') {
      (this.guaranteedResourceSpec as any).validate();
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(this.resourceUsed && typeof (this.resourceUsed as any).validate === 'function') {
      (this.resourceUsed as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

