// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionResponseBodyAvailableZonesOptions extends $dara.Model {
  /**
   * @remarks
   * The protocol type. Only Hadoop Distributed File System (HDFS) is supported.
   * 
   * @example
   * HDFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage medium type. Valid values:
   * - STANDARD: Standard.
   * - PERFORMANCE: Performance.
   * 
   * @example
   * STANDARD
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      protocolType: 'ProtocolType',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolType: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionResponseBodyAvailableZones extends $dara.Model {
  /**
   * @remarks
   * The list of configurations.
   */
  options?: GetRegionResponseBodyAvailableZonesOptions[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'array', 'itemType': GetRegionResponseBodyAvailableZonesOptions },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of zone information.
   */
  availableZones?: GetRegionResponseBodyAvailableZones[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AEC07154-5A4C-4B34-BB74-0893C6E9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': GetRegionResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

