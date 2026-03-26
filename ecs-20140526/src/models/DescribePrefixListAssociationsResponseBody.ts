// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrefixListAssociationsResponseBodyPrefixListAssociationsPrefixListAssociation extends $dara.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListAssociationsResponseBodyPrefixListAssociations extends $dara.Model {
  prefixListAssociation?: DescribePrefixListAssociationsResponseBodyPrefixListAssociationsPrefixListAssociation[];
  static names(): { [key: string]: string } {
    return {
      prefixListAssociation: 'PrefixListAssociation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixListAssociation: { 'type': 'array', 'itemType': DescribePrefixListAssociationsResponseBodyPrefixListAssociationsPrefixListAssociation },
    };
  }

  validate() {
    if(Array.isArray(this.prefixListAssociation)) {
      $dara.Model.validateArray(this.prefixListAssociation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrefixListAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token that is returned in this call. If the return value is empty, no more data is returned.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  prefixListAssociations?: DescribePrefixListAssociationsResponseBodyPrefixListAssociations;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 38793DB8-A4B2-4AEC-BFD3-111234E9188D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      prefixListAssociations: 'PrefixListAssociations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      prefixListAssociations: DescribePrefixListAssociationsResponseBodyPrefixListAssociations,
      requestId: 'string',
    };
  }

  validate() {
    if(this.prefixListAssociations && typeof (this.prefixListAssociations as any).validate === 'function') {
      (this.prefixListAssociations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

