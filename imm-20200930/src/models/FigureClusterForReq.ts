// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FigureClusterForReqCoverFigures extends $dara.Model {
  /**
   * @remarks
   * The person ID.
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
   * The persons.
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
   * The cover image.
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
   * The custom labels. You can search for the cluster by label.
   * 
   * @example
   * {"Bucket": "examplebucket"}
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The version of the metadata lock. A metadata lock version can be obtained by using a get or list operation. If you include the MetaLockVersion parameter in a request to update the cluster, the server checks consistency between the MetaLockVersion parameter value sent in the request and the one on the server side and updates the cluster only when they are consistent. This parameter is used to prevent update conflicts in concurrent scenarios. The initial version is 0. The version is automatically increased by 1 after each successful update.
   * 
   * @example
   * 1
   */
  metaLockVersion?: number;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the face cluster.
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

