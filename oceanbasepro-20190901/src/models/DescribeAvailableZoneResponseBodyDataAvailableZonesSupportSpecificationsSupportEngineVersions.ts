// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsSupportEngineVersions extends $dara.Model {
  /**
   * @example
   * 3.2.4.4
   */
  obVersion?: string;
  /**
   * @example
   * true
   */
  supportIsolationOptimization?: boolean;
  supportReplicaModes?: string[];
  static names(): { [key: string]: string } {
    return {
      obVersion: 'ObVersion',
      supportIsolationOptimization: 'SupportIsolationOptimization',
      supportReplicaModes: 'SupportReplicaModes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      obVersion: 'string',
      supportIsolationOptimization: 'boolean',
      supportReplicaModes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportReplicaModes)) {
      $dara.Model.validateArray(this.supportReplicaModes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

