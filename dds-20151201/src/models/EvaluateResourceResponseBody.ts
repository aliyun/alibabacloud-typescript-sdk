// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the resources are sufficient in the region. Valid values:
   * 
   * *   **1**: The resources are sufficient.
   * *   **0**: The resources are insufficient.
   * 
   * @example
   * 1
   */
  DBInstanceAvailable?: string;
  /**
   * @remarks
   * The database engine of the instance. Only MongoDB is returned.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the request.
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

