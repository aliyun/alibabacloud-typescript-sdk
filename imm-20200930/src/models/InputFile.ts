// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";
import { Label } from "./Label";


export class InputFileFigures extends $dara.Model {
  /**
   * @remarks
   * The ID of the face cluster. The following IDs of special face clusters are reserved:
   * 
   * *   figure-cluster-id-independent: indicates that the face does not belong to any face cluster. The face may be added to a face cluster in subsequent face clustering tasks after new images are added to the dataset.
   * *   figure-cluster-id-unavailable: indicates that the face has not been included in a face clustering task since a new image was added to the dataset.
   * 
   * @example
   * Cluster-dbe72fec-b84c-4ab6-885b-3678e64****
   */
  figureClusterId?: string;
  /**
   * @remarks
   * The person ID.
   * 
   * @example
   * 2cb3c51e-b406-4b0c-af1b-897d88e1****
   */
  figureId?: string;
  /**
   * @remarks
   * The figure type. Set this parameter to `face`.
   * 
   * @example
   * face
   */
  figureType?: string;
  static names(): { [key: string]: string } {
    return {
      figureClusterId: 'FigureClusterId',
      figureId: 'FigureId',
      figureType: 'FigureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureClusterId: 'string',
      figureId: 'string',
      figureType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputFile extends $dara.Model {
  /**
   * @remarks
   * The addresses.
   */
  addresses?: Address[];
  /**
   * @remarks
   * The album.
   * 
   * @example
   * FirstAlbum
   */
  album?: string;
  /**
   * @remarks
   * The album artist.
   * 
   * @example
   * Jane
   */
  albumArtist?: string;
  /**
   * @remarks
   * The artist.
   * 
   * @example
   * Jane
   */
  artist?: string;
  /**
   * @remarks
   * The composer.
   * 
   * @example
   * Jane
   */
  composer?: string;
  /**
   * @remarks
   * In most cases, you can leave this parameter empty. The Multipurpose Internet Mail Extensions (MIME) type of the file.
   * 
   * @example
   * image/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The custom ID of the file. This parameter is optional. When the metadata of the file is indexed into the dataset, the custom ID is stored as the data attribute. You can map the custom ID to other data in your business system. You can configure this parameter based on your business requirements. For example, you can associate a URI with an ID in your business system. We recommend that you set this parameter to a unique value.
   * 
   * This parameter supports prefix searches and sorting during queries. For more information, see [Supported fields and operators](https://help.aliyun.com/document_detail/252856.html).
   * 
   * @example
   * member-image-id-0001
   */
  customId?: string;
  /**
   * @remarks
   * The custom labels of the file. This parameter is optional. The parameter stores custom key-value labels, which can be used to filter data. For more information, see [Supported fields and operators](https://help.aliyun.com/document_detail/252856.html).
   * 
   * @example
   * {
   *       "MemberName": "Tim",
   *       "Enabled": "True",
   *       "ItemCount": "10"
   * }
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is optional. The persons. This parameter is used to remove a face from a face group or modify a face group. For more information, see [Face clustering](https://help.aliyun.com/document_detail/477175.html).
   * 
   * >  This parameter takes effect only for the UpdateFileMeta or BatchUpdateFileMeta operation.
   */
  figures?: InputFileFigures[];
  /**
   * @remarks
   * The file hash. In most cases, you can leave this parameter empty. This parameter is required only when the URI parameter specifies a file in Photo and Drive Service.
   * 
   * @example
   * 1d9c280a7c4f67f7ef873e28449dbe17
   */
  fileHash?: string;
  /**
   * @remarks
   * The intelligent labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The GPS latitude and longitude information.
   * 
   * @example
   * 30.134390,120.074997
   */
  latLong?: string;
  /**
   * @remarks
   * In most cases, you can leave this parameter empty. The media type of the file.
   * 
   * Enumerated values:
   * 
   * *   image
   * *   other
   * *   document
   * *   archive
   * *   video
   * *   audio
   * 
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @remarks
   * The path of the OSS object. In most cases, you can leave this parameter empty. You can specify this parameter only if the URI parameter specifies a file in Photo and Drive Service.
   * 
   * @example
   * oss://test-bucket/test-object.jpg
   */
  OSSURI?: string;
  /**
   * @remarks
   * The performer.
   * 
   * @example
   * Jane
   */
  performer?: string;
  /**
   * @remarks
   * The time when the image was taken.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  produceTime?: string;
  /**
   * @remarks
   * The file title.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The URI of the file for which you want to create or update an index in the request. This parameter is required. The URI can represent an object in Object Storage Service (OSS) or a file in Photo and Drive Service.
   * 
   * The OSS URI must be in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that is in the same region as the current project. `${Object}` specifies the full file path that contains the object name extension.
   * 
   * The URI of a file in Photo and Drive Service must be in the `pds://domains/${domain}/drives/${drive}/files/${file}/revisions/${revision}` format.
   * 
   * >  URIs that start with HTTP are not supported.
   * 
   * @example
   * oss://examplebucket/sampleobject.jpg
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      album: 'Album',
      albumArtist: 'AlbumArtist',
      artist: 'Artist',
      composer: 'Composer',
      contentType: 'ContentType',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      figures: 'Figures',
      fileHash: 'FileHash',
      labels: 'Labels',
      latLong: 'LatLong',
      mediaType: 'MediaType',
      OSSURI: 'OSSURI',
      performer: 'Performer',
      produceTime: 'ProduceTime',
      title: 'Title',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      album: 'string',
      albumArtist: 'string',
      artist: 'string',
      composer: 'string',
      contentType: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      figures: { 'type': 'array', 'itemType': InputFileFigures },
      fileHash: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latLong: 'string',
      mediaType: 'string',
      OSSURI: 'string',
      performer: 'string',
      produceTime: 'string',
      title: 'string',
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(Array.isArray(this.figures)) {
      $dara.Model.validateArray(this.figures);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

