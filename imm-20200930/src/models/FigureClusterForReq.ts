// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FigureClusterForReqCoverFigures extends $dara.Model {
  /**
   * @remarks
   * The figure ID.
   * 
   * @example
   * 2cb3c51e-b406-4b0c-af1b-897d88e1****
   */
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FigureClusterForReqCover extends $dara.Model {
  /**
   * @remarks
   * The figure list.
   */
  figures?: FigureClusterForReqCoverFigures[];
  static names(): { [key: string]: string } {
    return {
      figures: 'Figures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figures: { 'type': 'array', 'itemType': FigureClusterForReqCoverFigures },
    };
  }

  validate() {
    if(Array.isArray(this.figures)) {
      $dara.Model.validateArray(this.figures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FigureClusterForReq extends $dara.Model {
  /**
   * @remarks
   * The cover of the cluster.
   */
  cover?: FigureClusterForReqCover;
  /**
   * @remarks
   * The custom ID.
   * 
   * @example
   * abc
   */
  customId?: string;
  /**
   * @remarks
   * A key-value map of custom labels that can be used to search for the figure cluster.
   * 
   * @example
   * {"Bucket": "examplebucket"}
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The metadata lock version. This parameter enables optimistic locking to prevent conflicting updates during high concurrency. To ensure data consistency, pass the current MetaLockVersion value when updating a figure cluster. You can retrieve this value from a Get or List operation. The service proceeds with the update only if the provided version matches the system\\"s current version. The initial value is 0 and is incremented by 1 after each successful update.
   * 
   * @example
   * 1
   */
  metaLockVersion?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The object ID of the cluster.
   * 
   * @example
   * Cluster-99b1c333-86dc-45da-8c6****
   */
  objectId?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      metaLockVersion: 'MetaLockVersion',
      name: 'Name',
      objectId: 'ObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: FigureClusterForReqCover,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metaLockVersion: 'number',
      name: 'string',
      objectId: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

