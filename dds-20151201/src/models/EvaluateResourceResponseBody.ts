// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether sufficient resources are available in the current region. Valid values:
   * - **1**: Sufficient resources are available.
   * - **0**: Insufficient resources are available.
   * 
   * @example
   * 1
   */
  DBInstanceAvailable?: string;
  /**
   * @remarks
   * The database engine. The value is fixed as MongoDB.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE2DE465-E45F-481F-ABD8-37D64173****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceAvailable: 'DBInstanceAvailable',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAvailable: 'string',
      engine: 'string',
      engineVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

