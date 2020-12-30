// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivatePhotosRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivatePhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: ActivatePhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ActivatePhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivatePhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActivatePhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActivatePhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAlbumPhotosRequest extends $tea.Model {
  albumId?: number;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'number',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAlbumPhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: AddAlbumPhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AddAlbumPhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAlbumPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAlbumPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAlbumPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlbumRequest extends $tea.Model {
  albumName?: string;
  storeName?: string;
  remark?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      albumName: 'AlbumName',
      storeName: 'StoreName',
      remark: 'Remark',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumName: 'string',
      storeName: 'string',
      remark: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlbumResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  album?: CreateAlbumResponseBodyAlbum;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      album: 'Album',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      album: CreateAlbumResponseBodyAlbum,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlbumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAlbumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAlbumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhotoRequest extends $tea.Model {
  fileId?: string;
  sessionId?: string;
  uploadType?: string;
  photoTitle?: string;
  storeName?: string;
  remark?: string;
  libraryId?: string;
  staging?: string;
  shareExpireTime?: number;
  takenAt?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      sessionId: 'SessionId',
      uploadType: 'UploadType',
      photoTitle: 'PhotoTitle',
      storeName: 'StoreName',
      remark: 'Remark',
      libraryId: 'LibraryId',
      staging: 'Staging',
      shareExpireTime: 'ShareExpireTime',
      takenAt: 'TakenAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      sessionId: 'string',
      uploadType: 'string',
      photoTitle: 'string',
      storeName: 'string',
      remark: 'string',
      libraryId: 'string',
      staging: 'string',
      shareExpireTime: 'number',
      takenAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhotoResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  photo?: CreatePhotoResponseBodyPhoto;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      photo: 'Photo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      photo: CreatePhotoResponseBodyPhoto,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhotoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePhotoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePhotoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhotoStoreRequest extends $tea.Model {
  storeName?: string;
  defaultQuota?: number;
  bucketName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      defaultQuota: 'DefaultQuota',
      bucketName: 'BucketName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      defaultQuota: 'number',
      bucketName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhotoStoreResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhotoStoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePhotoStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePhotoStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransactionRequest extends $tea.Model {
  size?: number;
  ext?: string;
  force?: string;
  md5?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      ext: 'Ext',
      force: 'Force',
      md5: 'Md5',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      ext: 'string',
      force: 'string',
      md5: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransactionResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  transaction?: CreateTransactionResponseBodyTransaction;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      transaction: 'Transaction',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      transaction: CreateTransactionResponseBodyTransaction,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransactionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTransactionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTransactionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlbumsRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  albumId?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      albumId: 'AlbumId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      albumId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlbumsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: DeleteAlbumsResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DeleteAlbumsResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlbumsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAlbumsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlbumsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRequest extends $tea.Model {
  eventId?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacesRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  faceId?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      faceId: 'FaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      faceId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacesResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: DeleteFacesResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DeleteFacesResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhotosRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: DeletePhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DeletePhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhotoStoreRequest extends $tea.Model {
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhotoStoreResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhotoStoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePhotoStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePhotoStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPhotosRequest extends $tea.Model {
  shareExpireTime?: number;
  takenAt?: number;
  title?: string;
  remark?: string;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      shareExpireTime: 'ShareExpireTime',
      takenAt: 'TakenAt',
      title: 'Title',
      remark: 'Remark',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareExpireTime: 'number',
      takenAt: 'number',
      title: 'string',
      remark: 'string',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: EditPhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': EditPhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPhotoStoreRequest extends $tea.Model {
  autoCleanEnabled?: string;
  autoCleanDays?: number;
  defaultQuota?: number;
  defaultTrashQuota?: number;
  remark?: string;
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      autoCleanEnabled: 'AutoCleanEnabled',
      autoCleanDays: 'AutoCleanDays',
      defaultQuota: 'DefaultQuota',
      defaultTrashQuota: 'DefaultTrashQuota',
      remark: 'Remark',
      storeName: 'StoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanEnabled: 'string',
      autoCleanDays: 'number',
      defaultQuota: 'number',
      defaultTrashQuota: 'number',
      remark: 'string',
      storeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPhotoStoreResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPhotoStoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditPhotoStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditPhotoStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchAlbumTagPhotosRequest extends $tea.Model {
  albumId?: number;
  tagId?: number;
  size?: number;
  page?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      tagId: 'TagId',
      size: 'Size',
      page: 'Page',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'number',
      tagId: 'number',
      size: 'number',
      page: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchAlbumTagPhotosResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  message?: string;
  requestId?: string;
  results?: FetchAlbumTagPhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': FetchAlbumTagPhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchAlbumTagPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FetchAlbumTagPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FetchAlbumTagPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLibrariesRequest extends $tea.Model {
  storeName?: string;
  page?: number;
  size?: number;
  needQuota?: boolean;
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      page: 'Page',
      size: 'Size',
      needQuota: 'NeedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      page: 'number',
      size: 'number',
      needQuota: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLibrariesResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  message?: string;
  requestId?: string;
  libraries?: FetchLibrariesResponseBodyLibraries[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      libraries: 'Libraries',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      libraries: { 'type': 'array', 'itemType': FetchLibrariesResponseBodyLibraries },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FetchLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FetchLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchMomentPhotosRequest extends $tea.Model {
  momentId?: number;
  orderBy?: string;
  order?: string;
  size?: number;
  page?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      momentId: 'MomentId',
      orderBy: 'OrderBy',
      order: 'Order',
      size: 'Size',
      page: 'Page',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      momentId: 'number',
      orderBy: 'string',
      order: 'string',
      size: 'number',
      page: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchMomentPhotosResponseBody extends $tea.Model {
  photos?: FetchMomentPhotosResponseBodyPhotos[];
  action?: string;
  totalCount?: number;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      photos: 'Photos',
      action: 'Action',
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photos: { 'type': 'array', 'itemType': FetchMomentPhotosResponseBodyPhotos },
      action: 'string',
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchMomentPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FetchMomentPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FetchMomentPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchPhotosRequest extends $tea.Model {
  state?: string;
  orderBy?: string;
  order?: string;
  size?: number;
  page?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      orderBy: 'OrderBy',
      order: 'Order',
      size: 'Size',
      page: 'Page',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      orderBy: 'string',
      order: 'string',
      size: 'number',
      page: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchPhotosResponseBody extends $tea.Model {
  photos?: FetchPhotosResponseBodyPhotos[];
  action?: string;
  totalCount?: number;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      photos: 'Photos',
      action: 'Action',
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photos: { 'type': 'array', 'itemType': FetchPhotosResponseBodyPhotos },
      action: 'string',
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FetchPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FetchPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumsByNamesRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  name?: string[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      name: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumsByNamesResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  albums?: GetAlbumsByNamesResponseBodyAlbums[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      albums: 'Albums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
      albums: { 'type': 'array', 'itemType': GetAlbumsByNamesResponseBodyAlbums },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumsByNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlbumsByNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlbumsByNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlRequest extends $tea.Model {
  photoId?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      photoId: 'PhotoId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoId: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlsRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: GetDownloadUrlsResponseBodyResults;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: GetDownloadUrlsResponseBodyResults,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDownloadUrlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDownloadUrlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFramedPhotoUrlsRequest extends $tea.Model {
  frameId?: string;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      frameId: 'FrameId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameId: 'string',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFramedPhotoUrlsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: GetFramedPhotoUrlsResponseBodyResults;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: GetFramedPhotoUrlsResponseBodyResults,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFramedPhotoUrlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFramedPhotoUrlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFramedPhotoUrlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  library?: GetLibraryResponseBodyLibrary;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      library: 'Library',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      library: GetLibraryResponseBodyLibrary,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLibraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotosRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotosResponseBody extends $tea.Model {
  photos?: GetPhotosResponseBodyPhotos[];
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      photos: 'Photos',
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photos: { 'type': 'array', 'itemType': GetPhotosResponseBodyPhotos },
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotosByMd5sRequest extends $tea.Model {
  state?: string;
  storeName?: string;
  libraryId?: string;
  md5?: string[];
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      md5: 'Md5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
      md5: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotosByMd5sResponseBody extends $tea.Model {
  photos?: GetPhotosByMd5sResponseBodyPhotos[];
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      photos: 'Photos',
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photos: { 'type': 'array', 'itemType': GetPhotosByMd5sResponseBodyPhotos },
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotosByMd5sResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPhotosByMd5sResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPhotosByMd5sResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotoStoreRequest extends $tea.Model {
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotoStoreResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  photoStore?: GetPhotoStoreResponseBodyPhotoStore;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      photoStore: 'PhotoStore',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      photoStore: GetPhotoStoreResponseBodyPhotoStore,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotoStoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPhotoStoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPhotoStoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessUrlsRequest extends $tea.Model {
  zoomType?: string;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      zoomType: 'ZoomType',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoomType: 'string',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessUrlsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: GetPrivateAccessUrlsResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': GetPrivateAccessUrlsResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessUrlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPrivateAccessUrlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPrivateAccessUrlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicAccessUrlsRequest extends $tea.Model {
  zoomType?: string;
  domainType?: string;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      zoomType: 'ZoomType',
      domainType: 'DomainType',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoomType: 'string',
      domainType: 'string',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicAccessUrlsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: GetPublicAccessUrlsResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': GetPublicAccessUrlsResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicAccessUrlsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPublicAccessUrlsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPublicAccessUrlsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  quota?: GetQuotaResponseBodyQuota;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      quota: 'Quota',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      quota: GetQuotaResponseBodyQuota,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarPhotosRequest extends $tea.Model {
  photoId?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      photoId: 'PhotoId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoId: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarPhotosResponseBody extends $tea.Model {
  photos?: GetSimilarPhotosResponseBodyPhotos[];
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      photos: 'Photos',
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photos: { 'type': 'array', 'itemType': GetSimilarPhotosResponseBodyPhotos },
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSimilarPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSimilarPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThumbnailRequest extends $tea.Model {
  photoId?: number;
  zoomType?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      photoId: 'PhotoId',
      zoomType: 'ZoomType',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoId: 'number',
      zoomType: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThumbnailResponseBody extends $tea.Model {
  action?: string;
  thumbnailUrl?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      thumbnailUrl: 'ThumbnailUrl',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      thumbnailUrl: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThumbnailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetThumbnailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetThumbnailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThumbnailsRequest extends $tea.Model {
  zoomType?: string;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      zoomType: 'ZoomType',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoomType: 'string',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThumbnailsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: GetThumbnailsResponseBodyResults;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: GetThumbnailsResponseBodyResults,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThumbnailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetThumbnailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetThumbnailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoCoverRequest extends $tea.Model {
  photoId?: number;
  zoomType?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      photoId: 'PhotoId',
      zoomType: 'ZoomType',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoId: 'number',
      zoomType: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoCoverResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  videoCoverUrl?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      videoCoverUrl: 'VideoCoverUrl',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      videoCoverUrl: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoCoverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVideoCoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVideoCoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivatePhotosRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  inactiveTime?: number;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      inactiveTime: 'InactiveTime',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      inactiveTime: 'number',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivatePhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: InactivatePhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': InactivatePhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivatePhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InactivatePhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InactivatePhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LikePhotoRequest extends $tea.Model {
  photoId?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      photoId: 'PhotoId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoId: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LikePhotoResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LikePhotoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LikePhotoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LikePhotoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumPhotosRequest extends $tea.Model {
  albumId?: number;
  direction?: string;
  size?: number;
  cursor?: string;
  state?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      direction: 'Direction',
      size: 'Size',
      cursor: 'Cursor',
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'number',
      direction: 'string',
      size: 'number',
      cursor: 'string',
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumPhotosResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  nextCursor?: string;
  requestId?: string;
  message?: string;
  results?: ListAlbumPhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      nextCursor: 'NextCursor',
      requestId: 'RequestId',
      message: 'Message',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      nextCursor: 'string',
      requestId: 'string',
      message: 'string',
      results: { 'type': 'array', 'itemType': ListAlbumPhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlbumPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlbumPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumsRequest extends $tea.Model {
  direction?: string;
  size?: number;
  cursor?: string;
  state?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      size: 'Size',
      cursor: 'Cursor',
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      size: 'number',
      cursor: 'string',
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumsResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  nextCursor?: string;
  requestId?: string;
  message?: string;
  code?: string;
  albums?: ListAlbumsResponseBodyAlbums[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      nextCursor: 'NextCursor',
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      albums: 'Albums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      nextCursor: 'string',
      requestId: 'string',
      message: 'string',
      code: 'string',
      albums: { 'type': 'array', 'itemType': ListAlbumsResponseBodyAlbums },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlbumsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlbumsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacePhotosRequest extends $tea.Model {
  faceId?: number;
  direction?: string;
  size?: number;
  cursor?: string;
  state?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      direction: 'Direction',
      size: 'Size',
      cursor: 'Cursor',
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'number',
      direction: 'string',
      size: 'number',
      cursor: 'string',
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacePhotosResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  nextCursor?: string;
  requestId?: string;
  message?: string;
  results?: ListFacePhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      nextCursor: 'NextCursor',
      requestId: 'RequestId',
      message: 'Message',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      nextCursor: 'string',
      requestId: 'string',
      message: 'string',
      results: { 'type': 'array', 'itemType': ListFacePhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacePhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFacePhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFacePhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacesRequest extends $tea.Model {
  direction?: string;
  size?: number;
  cursor?: string;
  state?: string;
  storeName?: string;
  libraryId?: string;
  hasFaceName?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      size: 'Size',
      cursor: 'Cursor',
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      hasFaceName: 'HasFaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      size: 'number',
      cursor: 'string',
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
      hasFaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacesResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  nextCursor?: string;
  requestId?: string;
  message?: string;
  code?: string;
  faces?: ListFacesResponseBodyFaces[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      nextCursor: 'NextCursor',
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
      faces: 'Faces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      nextCursor: 'string',
      requestId: 'string',
      message: 'string',
      code: 'string',
      faces: { 'type': 'array', 'itemType': ListFacesResponseBodyFaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMomentPhotosRequest extends $tea.Model {
  momentId?: number;
  direction?: string;
  size?: number;
  cursor?: string;
  state?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      momentId: 'MomentId',
      direction: 'Direction',
      size: 'Size',
      cursor: 'Cursor',
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      momentId: 'number',
      direction: 'string',
      size: 'number',
      cursor: 'string',
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMomentPhotosResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  nextCursor?: string;
  requestId?: string;
  message?: string;
  results?: ListMomentPhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      nextCursor: 'NextCursor',
      requestId: 'RequestId',
      message: 'Message',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      nextCursor: 'string',
      requestId: 'string',
      message: 'string',
      results: { 'type': 'array', 'itemType': ListMomentPhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMomentPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMomentPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMomentPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMomentsRequest extends $tea.Model {
  direction?: string;
  size?: number;
  cursor?: string;
  state?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      size: 'Size',
      cursor: 'Cursor',
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      size: 'number',
      cursor: 'string',
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMomentsResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  nextCursor?: string;
  requestId?: string;
  message?: string;
  moments?: ListMomentsResponseBodyMoments[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      nextCursor: 'NextCursor',
      requestId: 'RequestId',
      message: 'Message',
      moments: 'Moments',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      nextCursor: 'string',
      requestId: 'string',
      message: 'string',
      moments: { 'type': 'array', 'itemType': ListMomentsResponseBodyMoments },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMomentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMomentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMomentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoFacesRequest extends $tea.Model {
  photoId?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      photoId: 'PhotoId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoId: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoFacesResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  faces?: ListPhotoFacesResponseBodyFaces[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      faces: 'Faces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
      faces: { 'type': 'array', 'itemType': ListPhotoFacesResponseBodyFaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhotoFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhotoFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotosRequest extends $tea.Model {
  direction?: string;
  size?: number;
  cursor?: string;
  state?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      size: 'Size',
      cursor: 'Cursor',
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      size: 'number',
      cursor: 'string',
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotosResponseBody extends $tea.Model {
  photos?: ListPhotosResponseBodyPhotos[];
  action?: string;
  totalCount?: number;
  nextCursor?: string;
  requestId?: string;
  message?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      photos: 'Photos',
      action: 'Action',
      totalCount: 'TotalCount',
      nextCursor: 'NextCursor',
      requestId: 'RequestId',
      message: 'Message',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photos: { 'type': 'array', 'itemType': ListPhotosResponseBodyPhotos },
      action: 'string',
      totalCount: 'number',
      nextCursor: 'string',
      requestId: 'string',
      message: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoStoresResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  photoStores?: ListPhotoStoresResponseBodyPhotoStores[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      photoStores: 'PhotoStores',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      photoStores: { 'type': 'array', 'itemType': ListPhotoStoresResponseBodyPhotoStores },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoStoresResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhotoStoresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhotoStoresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoTagsRequest extends $tea.Model {
  photoId?: number;
  storeName?: string;
  libraryId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      photoId: 'PhotoId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoId: 'number',
      storeName: 'string',
      libraryId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoTagsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  tags?: ListPhotoTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
      tags: { 'type': 'array', 'itemType': ListPhotoTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPhotoTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPhotoTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegisteredTagsRequest extends $tea.Model {
  storeName?: string;
  lang?: string[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      lang: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegisteredTagsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  registeredTags?: ListRegisteredTagsResponseBodyRegisteredTags[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      registeredTags: 'RegisteredTags',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      registeredTags: { 'type': 'array', 'itemType': ListRegisteredTagsResponseBodyRegisteredTags },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegisteredTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRegisteredTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRegisteredTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagPhotosRequest extends $tea.Model {
  tagId?: number;
  direction?: string;
  size?: number;
  cursor?: string;
  state?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      direction: 'Direction',
      size: 'Size',
      cursor: 'Cursor',
      state: 'State',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'number',
      direction: 'string',
      size: 'number',
      cursor: 'string',
      state: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagPhotosResponseBody extends $tea.Model {
  action?: string;
  totalCount?: number;
  nextCursor?: string;
  requestId?: string;
  message?: string;
  results?: ListTagPhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      totalCount: 'TotalCount',
      nextCursor: 'NextCursor',
      requestId: 'RequestId',
      message: 'Message',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      totalCount: 'number',
      nextCursor: 'string',
      requestId: 'string',
      message: 'string',
      results: { 'type': 'array', 'itemType': ListTagPhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $tea.Model {
  lang?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  tags?: ListTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinePhotosRequest extends $tea.Model {
  direction?: string;
  page?: number;
  size?: number;
  startTime?: number;
  endTime?: number;
  filterBy?: string;
  order?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      page: 'Page',
      size: 'Size',
      startTime: 'StartTime',
      endTime: 'EndTime',
      filterBy: 'FilterBy',
      order: 'Order',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      page: 'number',
      size: 'number',
      startTime: 'number',
      endTime: 'number',
      filterBy: 'string',
      order: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinePhotosResponseBody extends $tea.Model {
  photos?: ListTimeLinePhotosResponseBodyPhotos[];
  action?: string;
  totalCount?: number;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      photos: 'Photos',
      action: 'Action',
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photos: { 'type': 'array', 'itemType': ListTimeLinePhotosResponseBodyPhotos },
      action: 'string',
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinePhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTimeLinePhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTimeLinePhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinesRequest extends $tea.Model {
  direction?: string;
  photoSize?: number;
  cursor?: number;
  timeLineCount?: number;
  timeLineUnit?: string;
  filterBy?: string;
  order?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      photoSize: 'PhotoSize',
      cursor: 'Cursor',
      timeLineCount: 'TimeLineCount',
      timeLineUnit: 'TimeLineUnit',
      filterBy: 'FilterBy',
      order: 'Order',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      photoSize: 'number',
      cursor: 'number',
      timeLineCount: 'number',
      timeLineUnit: 'string',
      filterBy: 'string',
      order: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinesResponseBody extends $tea.Model {
  action?: string;
  nextCursor?: number;
  timeLines?: ListTimeLinesResponseBodyTimeLines[];
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      nextCursor: 'NextCursor',
      timeLines: 'TimeLines',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      nextCursor: 'number',
      timeLines: { 'type': 'array', 'itemType': ListTimeLinesResponseBodyTimeLines },
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTimeLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTimeLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeFacesRequest extends $tea.Model {
  targetFaceId?: number;
  storeName?: string;
  libraryId?: string;
  faceId?: number[];
  static names(): { [key: string]: string } {
    return {
      targetFaceId: 'TargetFaceId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      faceId: 'FaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetFaceId: 'number',
      storeName: 'string',
      libraryId: 'string',
      faceId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeFacesResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: MergeFacesResponseBodyResults;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: MergeFacesResponseBodyResults,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MergeFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MergeFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAlbumPhotosRequest extends $tea.Model {
  sourceAlbumId?: number;
  targetAlbumId?: number;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      sourceAlbumId: 'SourceAlbumId',
      targetAlbumId: 'TargetAlbumId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceAlbumId: 'number',
      targetAlbumId: 'number',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAlbumPhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: MoveAlbumPhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': MoveAlbumPhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAlbumPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveAlbumPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveAlbumPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFacePhotosRequest extends $tea.Model {
  sourceFaceId?: number;
  targetFaceId?: number;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      sourceFaceId: 'SourceFaceId',
      targetFaceId: 'TargetFaceId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceFaceId: 'number',
      targetFaceId: 'number',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFacePhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: MoveFacePhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': MoveFacePhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFacePhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveFacePhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveFacePhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivatePhotosRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivatePhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: ReactivatePhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ReactivatePhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivatePhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReactivatePhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReactivatePhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterPhotoRequest extends $tea.Model {
  takenAt?: number;
  location?: string;
  storeName?: string;
  libraryId?: string;
  latitude?: number;
  longitude?: number;
  width?: number;
  height?: number;
  isVideo?: string;
  md5?: string;
  size?: number;
  photoTitle?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      takenAt: 'TakenAt',
      location: 'Location',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      latitude: 'Latitude',
      longitude: 'Longitude',
      width: 'Width',
      height: 'Height',
      isVideo: 'IsVideo',
      md5: 'Md5',
      size: 'Size',
      photoTitle: 'PhotoTitle',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      takenAt: 'number',
      location: 'string',
      storeName: 'string',
      libraryId: 'string',
      latitude: 'number',
      longitude: 'number',
      width: 'number',
      height: 'number',
      isVideo: 'string',
      md5: 'string',
      size: 'number',
      photoTitle: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterPhotoResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  photo?: RegisterPhotoResponseBodyPhoto;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      photo: 'Photo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      photo: RegisterPhotoResponseBodyPhoto,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterPhotoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterPhotoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterPhotoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterTagRequest extends $tea.Model {
  storeName?: string;
  tagKey?: string;
  lang?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      tagKey: 'TagKey',
      lang: 'Lang',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      tagKey: 'string',
      lang: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterTagResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAlbumPhotosRequest extends $tea.Model {
  albumId?: number;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'number',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAlbumPhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: RemoveAlbumPhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': RemoveAlbumPhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAlbumPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAlbumPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAlbumPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFacePhotosRequest extends $tea.Model {
  faceId?: number;
  storeName?: string;
  libraryId?: string;
  photoId?: number[];
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'number',
      storeName: 'string',
      libraryId: 'string',
      photoId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFacePhotosResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  results?: RemoveFacePhotosResponseBodyResults[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      results: 'Results',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': RemoveFacePhotosResponseBodyResults },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFacePhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveFacePhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveFacePhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameAlbumRequest extends $tea.Model {
  albumId?: number;
  albumName?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      albumName: 'AlbumName',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'number',
      albumName: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameAlbumResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameAlbumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenameAlbumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenameAlbumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFaceRequest extends $tea.Model {
  faceId?: number;
  faceName?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      faceName: 'FaceName',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'number',
      faceName: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFaceResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenameFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenameFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPhotosRequest extends $tea.Model {
  page?: number;
  size?: number;
  keyword?: string;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      keyword: 'Keyword',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      keyword: 'string',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPhotosResponseBody extends $tea.Model {
  photos?: SearchPhotosResponseBodyPhotos[];
  action?: string;
  totalCount?: number;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      photos: 'Photos',
      action: 'Action',
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photos: { 'type': 'array', 'itemType': SearchPhotosResponseBodyPhotos },
      action: 'string',
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPhotosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchPhotosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchPhotosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAlbumCoverRequest extends $tea.Model {
  albumId?: number;
  photoId?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      photoId: 'PhotoId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'number',
      photoId: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAlbumCoverResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAlbumCoverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAlbumCoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAlbumCoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFaceCoverRequest extends $tea.Model {
  faceId?: number;
  photoId?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      photoId: 'PhotoId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'number',
      photoId: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFaceCoverResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFaceCoverResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetFaceCoverResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetFaceCoverResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMeRequest extends $tea.Model {
  faceId?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMeResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetMeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetMeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQuotaRequest extends $tea.Model {
  totalQuota?: number;
  storeName?: string;
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      totalQuota: 'TotalQuota',
      storeName: 'StoreName',
      libraryId: 'LibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalQuota: 'number',
      storeName: 'string',
      libraryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQuotaResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagPhotoRequest extends $tea.Model {
  storeName?: string;
  libraryId?: string;
  photoId?: number;
  tagKey?: string[];
  confidence?: number[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      libraryId: 'LibraryId',
      photoId: 'PhotoId',
      tagKey: 'TagKey',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      libraryId: 'string',
      photoId: 'number',
      tagKey: { 'type': 'array', 'itemType': 'string' },
      confidence: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagPhotoResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagPhotoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagPhotoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagPhotoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToggleFeaturesRequest extends $tea.Model {
  storeName?: string;
  enabledFeatures?: string[];
  disabledFeatures?: string[];
  static names(): { [key: string]: string } {
    return {
      storeName: 'StoreName',
      enabledFeatures: 'EnabledFeatures',
      disabledFeatures: 'DisabledFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storeName: 'string',
      enabledFeatures: { 'type': 'array', 'itemType': 'string' },
      disabledFeatures: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToggleFeaturesResponseBody extends $tea.Model {
  action?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToggleFeaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ToggleFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ToggleFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivatePhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAlbumPhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlbumResponseBodyAlbumCover extends $tea.Model {
  remark?: string;
  state?: string;
  height?: number;
  fileId?: string;
  idStr?: string;
  mtime?: number;
  ctime?: number;
  width?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      state: 'State',
      height: 'Height',
      fileId: 'FileId',
      idStr: 'IdStr',
      mtime: 'Mtime',
      ctime: 'Ctime',
      width: 'Width',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      state: 'string',
      height: 'number',
      fileId: 'string',
      idStr: 'string',
      mtime: 'number',
      ctime: 'number',
      width: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlbumResponseBodyAlbum extends $tea.Model {
  idStr?: string;
  photosCount?: number;
  cover?: CreateAlbumResponseBodyAlbumCover;
  mtime?: number;
  ctime?: number;
  remark?: string;
  state?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      photosCount: 'PhotosCount',
      cover: 'Cover',
      mtime: 'Mtime',
      ctime: 'Ctime',
      remark: 'Remark',
      state: 'State',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      photosCount: 'number',
      cover: CreateAlbumResponseBodyAlbumCover,
      mtime: 'number',
      ctime: 'number',
      remark: 'string',
      state: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePhotoResponseBodyPhoto extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  width?: number;
  size?: number;
  md5?: string;
  title?: string;
  isVideo?: boolean;
  id?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      width: 'Width',
      size: 'Size',
      md5: 'Md5',
      title: 'Title',
      isVideo: 'IsVideo',
      id: 'Id',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      width: 'number',
      size: 'number',
      md5: 'string',
      title: 'string',
      isVideo: 'boolean',
      id: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransactionResponseBodyTransactionUpload extends $tea.Model {
  objectKey?: string;
  accessKeySecret?: string;
  sessionId?: string;
  accessKeyId?: string;
  stsToken?: string;
  ossEndpoint?: string;
  bucket?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      objectKey: 'ObjectKey',
      accessKeySecret: 'AccessKeySecret',
      sessionId: 'SessionId',
      accessKeyId: 'AccessKeyId',
      stsToken: 'StsToken',
      ossEndpoint: 'OssEndpoint',
      bucket: 'Bucket',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectKey: 'string',
      accessKeySecret: 'string',
      sessionId: 'string',
      accessKeyId: 'string',
      stsToken: 'string',
      ossEndpoint: 'string',
      bucket: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransactionResponseBodyTransaction extends $tea.Model {
  upload?: CreateTransactionResponseBodyTransactionUpload;
  static names(): { [key: string]: string } {
    return {
      upload: 'Upload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upload: CreateTransactionResponseBodyTransactionUpload,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlbumsResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacesResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchAlbumTagPhotosResponseBodyResults extends $tea.Model {
  photoIdStr?: string;
  mtime?: number;
  state?: string;
  photoId?: number;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      mtime: 'Mtime',
      state: 'State',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      mtime: 'number',
      state: 'string',
      photoId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchLibrariesResponseBodyLibraries extends $tea.Model {
  ctime?: number;
  libraryId?: string;
  totalQuota?: number;
  static names(): { [key: string]: string } {
    return {
      ctime: 'Ctime',
      libraryId: 'LibraryId',
      totalQuota: 'TotalQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ctime: 'number',
      libraryId: 'string',
      totalQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchMomentPhotosResponseBodyPhotos extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  size?: number;
  width?: number;
  inactiveTime?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  location?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      size: 'Size',
      width: 'Width',
      inactiveTime: 'InactiveTime',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      location: 'Location',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      size: 'number',
      width: 'number',
      inactiveTime: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      location: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchPhotosResponseBodyPhotos extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  size?: number;
  width?: number;
  inactiveTime?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  location?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      size: 'Size',
      width: 'Width',
      inactiveTime: 'InactiveTime',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      location: 'Location',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      size: 'number',
      width: 'number',
      inactiveTime: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      location: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumsByNamesResponseBodyAlbumsCover extends $tea.Model {
  remark?: string;
  state?: string;
  height?: number;
  fileId?: string;
  idStr?: string;
  mtime?: number;
  ctime?: number;
  width?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      state: 'State',
      height: 'Height',
      fileId: 'FileId',
      idStr: 'IdStr',
      mtime: 'Mtime',
      ctime: 'Ctime',
      width: 'Width',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      state: 'string',
      height: 'number',
      fileId: 'string',
      idStr: 'string',
      mtime: 'number',
      ctime: 'number',
      width: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumsByNamesResponseBodyAlbums extends $tea.Model {
  idStr?: string;
  photosCount?: number;
  cover?: GetAlbumsByNamesResponseBodyAlbumsCover;
  mtime?: number;
  ctime?: number;
  state?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      photosCount: 'PhotosCount',
      cover: 'Cover',
      mtime: 'Mtime',
      ctime: 'Ctime',
      state: 'State',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      photosCount: 'number',
      cover: GetAlbumsByNamesResponseBodyAlbumsCover,
      mtime: 'number',
      ctime: 'number',
      state: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlsResponseBodyResultsResult extends $tea.Model {
  photoIdStr?: string;
  downloadUrl?: string;
  code?: string;
  message?: string;
  photoId?: number;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      downloadUrl: 'DownloadUrl',
      code: 'Code',
      message: 'Message',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      downloadUrl: 'string',
      code: 'string',
      message: 'string',
      photoId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadUrlsResponseBodyResults extends $tea.Model {
  result?: GetDownloadUrlsResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetDownloadUrlsResponseBodyResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFramedPhotoUrlsResponseBodyResultsResult extends $tea.Model {
  photoIdStr?: string;
  framedPhotoUrl?: string;
  code?: string;
  message?: string;
  photoId?: number;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      framedPhotoUrl: 'FramedPhotoUrl',
      code: 'Code',
      message: 'Message',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      framedPhotoUrl: 'string',
      code: 'string',
      message: 'string',
      photoId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFramedPhotoUrlsResponseBodyResults extends $tea.Model {
  result?: GetFramedPhotoUrlsResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetFramedPhotoUrlsResponseBodyResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyLibraryAutoCleanConfig extends $tea.Model {
  autoCleanDays?: number;
  autoCleanEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoCleanDays: 'AutoCleanDays',
      autoCleanEnabled: 'AutoCleanEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanDays: 'number',
      autoCleanEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyLibraryQuota extends $tea.Model {
  photosCount?: number;
  totalTrashQuota?: number;
  inactiveSize?: number;
  activeSize?: number;
  facesCount?: number;
  videosCount?: number;
  usedQuota?: number;
  totalQuota?: number;
  static names(): { [key: string]: string } {
    return {
      photosCount: 'PhotosCount',
      totalTrashQuota: 'TotalTrashQuota',
      inactiveSize: 'InactiveSize',
      activeSize: 'ActiveSize',
      facesCount: 'FacesCount',
      videosCount: 'VideosCount',
      usedQuota: 'UsedQuota',
      totalQuota: 'TotalQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photosCount: 'number',
      totalTrashQuota: 'number',
      inactiveSize: 'number',
      activeSize: 'number',
      facesCount: 'number',
      videosCount: 'number',
      usedQuota: 'number',
      totalQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLibraryResponseBodyLibrary extends $tea.Model {
  autoCleanConfig?: GetLibraryResponseBodyLibraryAutoCleanConfig;
  quota?: GetLibraryResponseBodyLibraryQuota;
  ctime?: number;
  static names(): { [key: string]: string } {
    return {
      autoCleanConfig: 'AutoCleanConfig',
      quota: 'Quota',
      ctime: 'Ctime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanConfig: GetLibraryResponseBodyLibraryAutoCleanConfig,
      quota: GetLibraryResponseBodyLibraryQuota,
      ctime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotosResponseBodyPhotos extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  width?: number;
  size?: number;
  inactiveTime?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  like?: number;
  location?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      width: 'Width',
      size: 'Size',
      inactiveTime: 'InactiveTime',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      like: 'Like',
      location: 'Location',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      width: 'number',
      size: 'number',
      inactiveTime: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      like: 'number',
      location: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotosByMd5sResponseBodyPhotos extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  width?: number;
  size?: number;
  md5?: string;
  title?: string;
  isVideo?: boolean;
  id?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      width: 'Width',
      size: 'Size',
      md5: 'Md5',
      title: 'Title',
      isVideo: 'IsVideo',
      id: 'Id',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      width: 'number',
      size: 'number',
      md5: 'string',
      title: 'string',
      isVideo: 'boolean',
      id: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotoStoreResponseBodyPhotoStoreBuckets extends $tea.Model {
  acl?: string;
  state?: string;
  region?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'Acl',
      state: 'State',
      region: 'Region',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      state: 'string',
      region: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhotoStoreResponseBodyPhotoStore extends $tea.Model {
  autoCleanDays?: number;
  idStr?: string;
  mtime?: number;
  ctime?: number;
  defaultTrashQuota?: number;
  remark?: string;
  buckets?: GetPhotoStoreResponseBodyPhotoStoreBuckets[];
  defaultQuota?: number;
  name?: string;
  autoCleanEnabled?: boolean;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      autoCleanDays: 'AutoCleanDays',
      idStr: 'IdStr',
      mtime: 'Mtime',
      ctime: 'Ctime',
      defaultTrashQuota: 'DefaultTrashQuota',
      remark: 'Remark',
      buckets: 'Buckets',
      defaultQuota: 'DefaultQuota',
      name: 'Name',
      autoCleanEnabled: 'AutoCleanEnabled',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanDays: 'number',
      idStr: 'string',
      mtime: 'number',
      ctime: 'number',
      defaultTrashQuota: 'number',
      remark: 'string',
      buckets: { 'type': 'array', 'itemType': GetPhotoStoreResponseBodyPhotoStoreBuckets },
      defaultQuota: 'number',
      name: 'string',
      autoCleanEnabled: 'boolean',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessUrlsResponseBodyResults extends $tea.Model {
  photoIdStr?: string;
  code?: string;
  message?: string;
  photoId?: number;
  accessUrl?: string;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      code: 'Code',
      message: 'Message',
      photoId: 'PhotoId',
      accessUrl: 'AccessUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      code: 'string',
      message: 'string',
      photoId: 'number',
      accessUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicAccessUrlsResponseBodyResults extends $tea.Model {
  photoIdStr?: string;
  code?: string;
  message?: string;
  photoId?: number;
  accessUrl?: string;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      code: 'Code',
      message: 'Message',
      photoId: 'PhotoId',
      accessUrl: 'AccessUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      code: 'string',
      message: 'string',
      photoId: 'number',
      accessUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyQuota extends $tea.Model {
  photosCount?: number;
  videosCount?: number;
  facesCount?: number;
  usedQuota?: number;
  totalQuota?: number;
  static names(): { [key: string]: string } {
    return {
      photosCount: 'PhotosCount',
      videosCount: 'VideosCount',
      facesCount: 'FacesCount',
      usedQuota: 'UsedQuota',
      totalQuota: 'TotalQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photosCount: 'number',
      videosCount: 'number',
      facesCount: 'number',
      usedQuota: 'number',
      totalQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarPhotosResponseBodyPhotos extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  size?: number;
  width?: number;
  inactiveTime?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  like?: number;
  location?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      size: 'Size',
      width: 'Width',
      inactiveTime: 'InactiveTime',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      like: 'Like',
      location: 'Location',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      size: 'number',
      width: 'number',
      inactiveTime: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      like: 'number',
      location: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThumbnailsResponseBodyResultsResult extends $tea.Model {
  thumbnailUrl?: string;
  photoIdStr?: string;
  code?: string;
  message?: string;
  photoId?: number;
  static names(): { [key: string]: string } {
    return {
      thumbnailUrl: 'ThumbnailUrl',
      photoIdStr: 'PhotoIdStr',
      code: 'Code',
      message: 'Message',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thumbnailUrl: 'string',
      photoIdStr: 'string',
      code: 'string',
      message: 'string',
      photoId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThumbnailsResponseBodyResults extends $tea.Model {
  result?: GetThumbnailsResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetThumbnailsResponseBodyResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InactivatePhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumPhotosResponseBodyResults extends $tea.Model {
  photoIdStr?: string;
  mtime?: number;
  state?: string;
  photoId?: number;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      mtime: 'Mtime',
      state: 'State',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      mtime: 'number',
      state: 'string',
      photoId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumsResponseBodyAlbumsCover extends $tea.Model {
  remark?: string;
  state?: string;
  height?: number;
  fileId?: string;
  idStr?: string;
  mtime?: number;
  ctime?: number;
  width?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      state: 'State',
      height: 'Height',
      fileId: 'FileId',
      idStr: 'IdStr',
      mtime: 'Mtime',
      ctime: 'Ctime',
      width: 'Width',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      state: 'string',
      height: 'number',
      fileId: 'string',
      idStr: 'string',
      mtime: 'number',
      ctime: 'number',
      width: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumsResponseBodyAlbums extends $tea.Model {
  idStr?: string;
  photosCount?: number;
  cover?: ListAlbumsResponseBodyAlbumsCover;
  mtime?: number;
  ctime?: number;
  remark?: string;
  state?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      photosCount: 'PhotosCount',
      cover: 'Cover',
      mtime: 'Mtime',
      ctime: 'Ctime',
      remark: 'Remark',
      state: 'State',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      photosCount: 'number',
      cover: ListAlbumsResponseBodyAlbumsCover,
      mtime: 'number',
      ctime: 'number',
      remark: 'string',
      state: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacePhotosResponseBodyResults extends $tea.Model {
  photoIdStr?: string;
  mtime?: number;
  state?: string;
  photoId?: number;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      mtime: 'Mtime',
      state: 'State',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      mtime: 'number',
      state: 'string',
      photoId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacesResponseBodyFacesCover extends $tea.Model {
  remark?: string;
  state?: string;
  height?: number;
  fileId?: string;
  idStr?: string;
  mtime?: number;
  ctime?: number;
  width?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      state: 'State',
      height: 'Height',
      fileId: 'FileId',
      idStr: 'IdStr',
      mtime: 'Mtime',
      ctime: 'Ctime',
      width: 'Width',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      state: 'string',
      height: 'number',
      fileId: 'string',
      idStr: 'string',
      mtime: 'number',
      ctime: 'number',
      width: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacesResponseBodyFaces extends $tea.Model {
  idStr?: string;
  photosCount?: number;
  isMe?: boolean;
  cover?: ListFacesResponseBodyFacesCover;
  mtime?: number;
  ctime?: number;
  state?: string;
  axis?: string[];
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      photosCount: 'PhotosCount',
      isMe: 'IsMe',
      cover: 'Cover',
      mtime: 'Mtime',
      ctime: 'Ctime',
      state: 'State',
      axis: 'Axis',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      photosCount: 'number',
      isMe: 'boolean',
      cover: ListFacesResponseBodyFacesCover,
      mtime: 'number',
      ctime: 'number',
      state: 'string',
      axis: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMomentPhotosResponseBodyResults extends $tea.Model {
  photoIdStr?: string;
  state?: string;
  photoId?: number;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      state: 'State',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      state: 'string',
      photoId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMomentsResponseBodyMoments extends $tea.Model {
  idStr?: string;
  photosCount?: number;
  mtime?: number;
  ctime?: number;
  takenAt?: number;
  state?: string;
  locationName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      photosCount: 'PhotosCount',
      mtime: 'Mtime',
      ctime: 'Ctime',
      takenAt: 'TakenAt',
      state: 'State',
      locationName: 'LocationName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      photosCount: 'number',
      mtime: 'number',
      ctime: 'number',
      takenAt: 'number',
      state: 'string',
      locationName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoFacesResponseBodyFaces extends $tea.Model {
  faceIdStr?: string;
  faceName?: string;
  faceId?: number;
  axis?: string[];
  static names(): { [key: string]: string } {
    return {
      faceIdStr: 'FaceIdStr',
      faceName: 'FaceName',
      faceId: 'FaceId',
      axis: 'Axis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceIdStr: 'string',
      faceName: 'string',
      faceId: 'number',
      axis: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotosResponseBodyPhotos extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  size?: number;
  width?: number;
  inactiveTime?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  location?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      size: 'Size',
      width: 'Width',
      inactiveTime: 'InactiveTime',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      location: 'Location',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      size: 'number',
      width: 'number',
      inactiveTime: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      location: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoStoresResponseBodyPhotoStoresBuckets extends $tea.Model {
  state?: string;
  region?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      region: 'Region',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      region: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoStoresResponseBodyPhotoStores extends $tea.Model {
  autoCleanDays?: number;
  idStr?: string;
  mtime?: number;
  ctime?: number;
  remark?: string;
  buckets?: ListPhotoStoresResponseBodyPhotoStoresBuckets[];
  defaultQuota?: number;
  name?: string;
  autoCleanEnabled?: boolean;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      autoCleanDays: 'AutoCleanDays',
      idStr: 'IdStr',
      mtime: 'Mtime',
      ctime: 'Ctime',
      remark: 'Remark',
      buckets: 'Buckets',
      defaultQuota: 'DefaultQuota',
      name: 'Name',
      autoCleanEnabled: 'AutoCleanEnabled',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanDays: 'number',
      idStr: 'string',
      mtime: 'number',
      ctime: 'number',
      remark: 'string',
      buckets: { 'type': 'array', 'itemType': ListPhotoStoresResponseBodyPhotoStoresBuckets },
      defaultQuota: 'number',
      name: 'string',
      autoCleanEnabled: 'boolean',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPhotoTagsResponseBodyTags extends $tea.Model {
  idStr?: string;
  isSubTag?: boolean;
  name?: string;
  parentTag?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      isSubTag: 'IsSubTag',
      name: 'Name',
      parentTag: 'ParentTag',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      isSubTag: 'boolean',
      name: 'string',
      parentTag: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegisteredTagsResponseBodyRegisteredTagsTagValues extends $tea.Model {
  lang?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegisteredTagsResponseBodyRegisteredTags extends $tea.Model {
  tagValues?: ListRegisteredTagsResponseBodyRegisteredTagsTagValues[];
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValues: 'TagValues',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValues: { 'type': 'array', 'itemType': ListRegisteredTagsResponseBodyRegisteredTagsTagValues },
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagPhotosResponseBodyResults extends $tea.Model {
  photoIdStr?: string;
  state?: string;
  photoId?: number;
  static names(): { [key: string]: string } {
    return {
      photoIdStr: 'PhotoIdStr',
      state: 'State',
      photoId: 'PhotoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      photoIdStr: 'string',
      state: 'string',
      photoId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagsCover extends $tea.Model {
  remark?: string;
  state?: string;
  height?: number;
  fileId?: string;
  idStr?: string;
  mtime?: number;
  ctime?: number;
  width?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      state: 'State',
      height: 'Height',
      fileId: 'FileId',
      idStr: 'IdStr',
      mtime: 'Mtime',
      ctime: 'Ctime',
      width: 'Width',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      state: 'string',
      height: 'number',
      fileId: 'string',
      idStr: 'string',
      mtime: 'number',
      ctime: 'number',
      width: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTags extends $tea.Model {
  idStr?: string;
  cover?: ListTagsResponseBodyTagsCover;
  isSubTag?: boolean;
  name?: string;
  parentTag?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      cover: 'Cover',
      isSubTag: 'IsSubTag',
      name: 'Name',
      parentTag: 'ParentTag',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      cover: ListTagsResponseBodyTagsCover,
      isSubTag: 'boolean',
      name: 'string',
      parentTag: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinePhotosResponseBodyPhotos extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  size?: number;
  width?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  like?: number;
  location?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      size: 'Size',
      width: 'Width',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      like: 'Like',
      location: 'Location',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      size: 'number',
      width: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      like: 'number',
      location: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinesResponseBodyTimeLinesPhotos extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  size?: number;
  width?: number;
  md5?: string;
  isVideo?: boolean;
  title?: string;
  like?: number;
  location?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      size: 'Size',
      width: 'Width',
      md5: 'Md5',
      isVideo: 'IsVideo',
      title: 'Title',
      like: 'Like',
      location: 'Location',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      size: 'number',
      width: 'number',
      md5: 'string',
      isVideo: 'boolean',
      title: 'string',
      like: 'number',
      location: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeLinesResponseBodyTimeLines extends $tea.Model {
  endTime?: number;
  photosCount?: number;
  startTime?: number;
  photos?: ListTimeLinesResponseBodyTimeLinesPhotos[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      photosCount: 'PhotosCount',
      startTime: 'StartTime',
      photos: 'Photos',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      photosCount: 'number',
      startTime: 'number',
      photos: { 'type': 'array', 'itemType': ListTimeLinesResponseBodyTimeLinesPhotos },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeFacesResponseBodyResultsResult extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MergeFacesResponseBodyResults extends $tea.Model {
  result?: MergeFacesResponseBodyResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': MergeFacesResponseBodyResultsResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAlbumPhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFacePhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReactivatePhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterPhotoResponseBodyPhoto extends $tea.Model {
  remark?: string;
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  width?: number;
  size?: number;
  md5?: string;
  title?: string;
  isVideo?: boolean;
  id?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      width: 'Width',
      size: 'Size',
      md5: 'Md5',
      title: 'Title',
      isVideo: 'IsVideo',
      id: 'Id',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      width: 'number',
      size: 'number',
      md5: 'string',
      title: 'string',
      isVideo: 'boolean',
      id: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAlbumPhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFacePhotosResponseBodyResults extends $tea.Model {
  idStr?: string;
  code?: string;
  message?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      idStr: 'IdStr',
      code: 'Code',
      message: 'Message',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idStr: 'string',
      code: 'string',
      message: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPhotosResponseBodyPhotos extends $tea.Model {
  takenAt?: number;
  state?: string;
  height?: number;
  shareExpireTime?: number;
  fileId?: string;
  idStr?: string;
  ctime?: number;
  mtime?: number;
  width?: number;
  size?: number;
  md5?: string;
  title?: string;
  isVideo?: boolean;
  id?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      takenAt: 'TakenAt',
      state: 'State',
      height: 'Height',
      shareExpireTime: 'ShareExpireTime',
      fileId: 'FileId',
      idStr: 'IdStr',
      ctime: 'Ctime',
      mtime: 'Mtime',
      width: 'Width',
      size: 'Size',
      md5: 'Md5',
      title: 'Title',
      isVideo: 'IsVideo',
      id: 'Id',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      takenAt: 'number',
      state: 'string',
      height: 'number',
      shareExpireTime: 'number',
      fileId: 'string',
      idStr: 'string',
      ctime: 'number',
      mtime: 'number',
      width: 'number',
      size: 'number',
      md5: 'string',
      title: 'string',
      isVideo: 'boolean',
      id: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudphoto", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async activatePhotosWithOptions(request: ActivatePhotosRequest, runtime: $Util.RuntimeOptions): Promise<ActivatePhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActivatePhotosResponse>(await this.doRPCRequest("ActivatePhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ActivatePhotosResponse({}));
  }

  async activatePhotos(request: ActivatePhotosRequest): Promise<ActivatePhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activatePhotosWithOptions(request, runtime);
  }

  async addAlbumPhotosWithOptions(request: AddAlbumPhotosRequest, runtime: $Util.RuntimeOptions): Promise<AddAlbumPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAlbumPhotosResponse>(await this.doRPCRequest("AddAlbumPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new AddAlbumPhotosResponse({}));
  }

  async addAlbumPhotos(request: AddAlbumPhotosRequest): Promise<AddAlbumPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAlbumPhotosWithOptions(request, runtime);
  }

  async createAlbumWithOptions(request: CreateAlbumRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlbumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAlbumResponse>(await this.doRPCRequest("CreateAlbum", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAlbumResponse({}));
  }

  async createAlbum(request: CreateAlbumRequest): Promise<CreateAlbumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlbumWithOptions(request, runtime);
  }

  async createPhotoWithOptions(request: CreatePhotoRequest, runtime: $Util.RuntimeOptions): Promise<CreatePhotoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePhotoResponse>(await this.doRPCRequest("CreatePhoto", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePhotoResponse({}));
  }

  async createPhoto(request: CreatePhotoRequest): Promise<CreatePhotoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhotoWithOptions(request, runtime);
  }

  async createPhotoStoreWithOptions(request: CreatePhotoStoreRequest, runtime: $Util.RuntimeOptions): Promise<CreatePhotoStoreResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePhotoStoreResponse>(await this.doRPCRequest("CreatePhotoStore", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePhotoStoreResponse({}));
  }

  async createPhotoStore(request: CreatePhotoStoreRequest): Promise<CreatePhotoStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPhotoStoreWithOptions(request, runtime);
  }

  async createTransactionWithOptions(request: CreateTransactionRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransactionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTransactionResponse>(await this.doRPCRequest("CreateTransaction", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTransactionResponse({}));
  }

  async createTransaction(request: CreateTransactionRequest): Promise<CreateTransactionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransactionWithOptions(request, runtime);
  }

  async deleteAlbumsWithOptions(request: DeleteAlbumsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlbumsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlbumsResponse>(await this.doRPCRequest("DeleteAlbums", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlbumsResponse({}));
  }

  async deleteAlbums(request: DeleteAlbumsRequest): Promise<DeleteAlbumsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlbumsWithOptions(request, runtime);
  }

  async deleteEventWithOptions(request: DeleteEventRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEventResponse>(await this.doRPCRequest("DeleteEvent", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEventResponse({}));
  }

  async deleteEvent(request: DeleteEventRequest): Promise<DeleteEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventWithOptions(request, runtime);
  }

  async deleteFacesWithOptions(request: DeleteFacesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFacesResponse>(await this.doRPCRequest("DeleteFaces", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFacesResponse({}));
  }

  async deleteFaces(request: DeleteFacesRequest): Promise<DeleteFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFacesWithOptions(request, runtime);
  }

  async deletePhotosWithOptions(request: DeletePhotosRequest, runtime: $Util.RuntimeOptions): Promise<DeletePhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePhotosResponse>(await this.doRPCRequest("DeletePhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePhotosResponse({}));
  }

  async deletePhotos(request: DeletePhotosRequest): Promise<DeletePhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhotosWithOptions(request, runtime);
  }

  async deletePhotoStoreWithOptions(request: DeletePhotoStoreRequest, runtime: $Util.RuntimeOptions): Promise<DeletePhotoStoreResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePhotoStoreResponse>(await this.doRPCRequest("DeletePhotoStore", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePhotoStoreResponse({}));
  }

  async deletePhotoStore(request: DeletePhotoStoreRequest): Promise<DeletePhotoStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePhotoStoreWithOptions(request, runtime);
  }

  async editPhotosWithOptions(request: EditPhotosRequest, runtime: $Util.RuntimeOptions): Promise<EditPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditPhotosResponse>(await this.doRPCRequest("EditPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new EditPhotosResponse({}));
  }

  async editPhotos(request: EditPhotosRequest): Promise<EditPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editPhotosWithOptions(request, runtime);
  }

  async editPhotoStoreWithOptions(request: EditPhotoStoreRequest, runtime: $Util.RuntimeOptions): Promise<EditPhotoStoreResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditPhotoStoreResponse>(await this.doRPCRequest("EditPhotoStore", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new EditPhotoStoreResponse({}));
  }

  async editPhotoStore(request: EditPhotoStoreRequest): Promise<EditPhotoStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editPhotoStoreWithOptions(request, runtime);
  }

  async fetchAlbumTagPhotosWithOptions(request: FetchAlbumTagPhotosRequest, runtime: $Util.RuntimeOptions): Promise<FetchAlbumTagPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FetchAlbumTagPhotosResponse>(await this.doRPCRequest("FetchAlbumTagPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new FetchAlbumTagPhotosResponse({}));
  }

  async fetchAlbumTagPhotos(request: FetchAlbumTagPhotosRequest): Promise<FetchAlbumTagPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchAlbumTagPhotosWithOptions(request, runtime);
  }

  async fetchLibrariesWithOptions(request: FetchLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<FetchLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FetchLibrariesResponse>(await this.doRPCRequest("FetchLibraries", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new FetchLibrariesResponse({}));
  }

  async fetchLibraries(request: FetchLibrariesRequest): Promise<FetchLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchLibrariesWithOptions(request, runtime);
  }

  async fetchMomentPhotosWithOptions(request: FetchMomentPhotosRequest, runtime: $Util.RuntimeOptions): Promise<FetchMomentPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FetchMomentPhotosResponse>(await this.doRPCRequest("FetchMomentPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new FetchMomentPhotosResponse({}));
  }

  async fetchMomentPhotos(request: FetchMomentPhotosRequest): Promise<FetchMomentPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchMomentPhotosWithOptions(request, runtime);
  }

  async fetchPhotosWithOptions(request: FetchPhotosRequest, runtime: $Util.RuntimeOptions): Promise<FetchPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FetchPhotosResponse>(await this.doRPCRequest("FetchPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new FetchPhotosResponse({}));
  }

  async fetchPhotos(request: FetchPhotosRequest): Promise<FetchPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchPhotosWithOptions(request, runtime);
  }

  async getAlbumsByNamesWithOptions(request: GetAlbumsByNamesRequest, runtime: $Util.RuntimeOptions): Promise<GetAlbumsByNamesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAlbumsByNamesResponse>(await this.doRPCRequest("GetAlbumsByNames", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetAlbumsByNamesResponse({}));
  }

  async getAlbumsByNames(request: GetAlbumsByNamesRequest): Promise<GetAlbumsByNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlbumsByNamesWithOptions(request, runtime);
  }

  async getDownloadUrlWithOptions(request: GetDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetDownloadUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDownloadUrlResponse>(await this.doRPCRequest("GetDownloadUrl", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetDownloadUrlResponse({}));
  }

  async getDownloadUrl(request: GetDownloadUrlRequest): Promise<GetDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDownloadUrlWithOptions(request, runtime);
  }

  async getDownloadUrlsWithOptions(request: GetDownloadUrlsRequest, runtime: $Util.RuntimeOptions): Promise<GetDownloadUrlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDownloadUrlsResponse>(await this.doRPCRequest("GetDownloadUrls", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetDownloadUrlsResponse({}));
  }

  async getDownloadUrls(request: GetDownloadUrlsRequest): Promise<GetDownloadUrlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDownloadUrlsWithOptions(request, runtime);
  }

  async getFramedPhotoUrlsWithOptions(request: GetFramedPhotoUrlsRequest, runtime: $Util.RuntimeOptions): Promise<GetFramedPhotoUrlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFramedPhotoUrlsResponse>(await this.doRPCRequest("GetFramedPhotoUrls", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetFramedPhotoUrlsResponse({}));
  }

  async getFramedPhotoUrls(request: GetFramedPhotoUrlsRequest): Promise<GetFramedPhotoUrlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFramedPhotoUrlsWithOptions(request, runtime);
  }

  async getLibraryWithOptions(request: GetLibraryRequest, runtime: $Util.RuntimeOptions): Promise<GetLibraryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLibraryResponse>(await this.doRPCRequest("GetLibrary", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetLibraryResponse({}));
  }

  async getLibrary(request: GetLibraryRequest): Promise<GetLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLibraryWithOptions(request, runtime);
  }

  async getPhotosWithOptions(request: GetPhotosRequest, runtime: $Util.RuntimeOptions): Promise<GetPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPhotosResponse>(await this.doRPCRequest("GetPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetPhotosResponse({}));
  }

  async getPhotos(request: GetPhotosRequest): Promise<GetPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhotosWithOptions(request, runtime);
  }

  async getPhotosByMd5sWithOptions(request: GetPhotosByMd5sRequest, runtime: $Util.RuntimeOptions): Promise<GetPhotosByMd5sResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPhotosByMd5sResponse>(await this.doRPCRequest("GetPhotosByMd5s", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetPhotosByMd5sResponse({}));
  }

  async getPhotosByMd5s(request: GetPhotosByMd5sRequest): Promise<GetPhotosByMd5sResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhotosByMd5sWithOptions(request, runtime);
  }

  async getPhotoStoreWithOptions(request: GetPhotoStoreRequest, runtime: $Util.RuntimeOptions): Promise<GetPhotoStoreResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPhotoStoreResponse>(await this.doRPCRequest("GetPhotoStore", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetPhotoStoreResponse({}));
  }

  async getPhotoStore(request: GetPhotoStoreRequest): Promise<GetPhotoStoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhotoStoreWithOptions(request, runtime);
  }

  async getPrivateAccessUrlsWithOptions(request: GetPrivateAccessUrlsRequest, runtime: $Util.RuntimeOptions): Promise<GetPrivateAccessUrlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPrivateAccessUrlsResponse>(await this.doRPCRequest("GetPrivateAccessUrls", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetPrivateAccessUrlsResponse({}));
  }

  async getPrivateAccessUrls(request: GetPrivateAccessUrlsRequest): Promise<GetPrivateAccessUrlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrivateAccessUrlsWithOptions(request, runtime);
  }

  async getPublicAccessUrlsWithOptions(request: GetPublicAccessUrlsRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicAccessUrlsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPublicAccessUrlsResponse>(await this.doRPCRequest("GetPublicAccessUrls", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetPublicAccessUrlsResponse({}));
  }

  async getPublicAccessUrls(request: GetPublicAccessUrlsRequest): Promise<GetPublicAccessUrlsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicAccessUrlsWithOptions(request, runtime);
  }

  async getQuotaWithOptions(request: GetQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQuotaResponse>(await this.doRPCRequest("GetQuota", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetQuotaResponse({}));
  }

  async getQuota(request: GetQuotaRequest): Promise<GetQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaWithOptions(request, runtime);
  }

  async getSimilarPhotosWithOptions(request: GetSimilarPhotosRequest, runtime: $Util.RuntimeOptions): Promise<GetSimilarPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSimilarPhotosResponse>(await this.doRPCRequest("GetSimilarPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetSimilarPhotosResponse({}));
  }

  async getSimilarPhotos(request: GetSimilarPhotosRequest): Promise<GetSimilarPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSimilarPhotosWithOptions(request, runtime);
  }

  async getThumbnailWithOptions(request: GetThumbnailRequest, runtime: $Util.RuntimeOptions): Promise<GetThumbnailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetThumbnailResponse>(await this.doRPCRequest("GetThumbnail", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetThumbnailResponse({}));
  }

  async getThumbnail(request: GetThumbnailRequest): Promise<GetThumbnailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThumbnailWithOptions(request, runtime);
  }

  async getThumbnailsWithOptions(request: GetThumbnailsRequest, runtime: $Util.RuntimeOptions): Promise<GetThumbnailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetThumbnailsResponse>(await this.doRPCRequest("GetThumbnails", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetThumbnailsResponse({}));
  }

  async getThumbnails(request: GetThumbnailsRequest): Promise<GetThumbnailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThumbnailsWithOptions(request, runtime);
  }

  async getVideoCoverWithOptions(request: GetVideoCoverRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoCoverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVideoCoverResponse>(await this.doRPCRequest("GetVideoCover", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new GetVideoCoverResponse({}));
  }

  async getVideoCover(request: GetVideoCoverRequest): Promise<GetVideoCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoCoverWithOptions(request, runtime);
  }

  async inactivatePhotosWithOptions(request: InactivatePhotosRequest, runtime: $Util.RuntimeOptions): Promise<InactivatePhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InactivatePhotosResponse>(await this.doRPCRequest("InactivatePhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new InactivatePhotosResponse({}));
  }

  async inactivatePhotos(request: InactivatePhotosRequest): Promise<InactivatePhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inactivatePhotosWithOptions(request, runtime);
  }

  async likePhotoWithOptions(request: LikePhotoRequest, runtime: $Util.RuntimeOptions): Promise<LikePhotoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LikePhotoResponse>(await this.doRPCRequest("LikePhoto", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new LikePhotoResponse({}));
  }

  async likePhoto(request: LikePhotoRequest): Promise<LikePhotoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.likePhotoWithOptions(request, runtime);
  }

  async listAlbumPhotosWithOptions(request: ListAlbumPhotosRequest, runtime: $Util.RuntimeOptions): Promise<ListAlbumPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAlbumPhotosResponse>(await this.doRPCRequest("ListAlbumPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListAlbumPhotosResponse({}));
  }

  async listAlbumPhotos(request: ListAlbumPhotosRequest): Promise<ListAlbumPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlbumPhotosWithOptions(request, runtime);
  }

  async listAlbumsWithOptions(request: ListAlbumsRequest, runtime: $Util.RuntimeOptions): Promise<ListAlbumsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAlbumsResponse>(await this.doRPCRequest("ListAlbums", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListAlbumsResponse({}));
  }

  async listAlbums(request: ListAlbumsRequest): Promise<ListAlbumsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlbumsWithOptions(request, runtime);
  }

  async listFacePhotosWithOptions(request: ListFacePhotosRequest, runtime: $Util.RuntimeOptions): Promise<ListFacePhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFacePhotosResponse>(await this.doRPCRequest("ListFacePhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListFacePhotosResponse({}));
  }

  async listFacePhotos(request: ListFacePhotosRequest): Promise<ListFacePhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFacePhotosWithOptions(request, runtime);
  }

  async listFacesWithOptions(request: ListFacesRequest, runtime: $Util.RuntimeOptions): Promise<ListFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFacesResponse>(await this.doRPCRequest("ListFaces", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListFacesResponse({}));
  }

  async listFaces(request: ListFacesRequest): Promise<ListFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFacesWithOptions(request, runtime);
  }

  async listMomentPhotosWithOptions(request: ListMomentPhotosRequest, runtime: $Util.RuntimeOptions): Promise<ListMomentPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMomentPhotosResponse>(await this.doRPCRequest("ListMomentPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListMomentPhotosResponse({}));
  }

  async listMomentPhotos(request: ListMomentPhotosRequest): Promise<ListMomentPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMomentPhotosWithOptions(request, runtime);
  }

  async listMomentsWithOptions(request: ListMomentsRequest, runtime: $Util.RuntimeOptions): Promise<ListMomentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMomentsResponse>(await this.doRPCRequest("ListMoments", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListMomentsResponse({}));
  }

  async listMoments(request: ListMomentsRequest): Promise<ListMomentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMomentsWithOptions(request, runtime);
  }

  async listPhotoFacesWithOptions(request: ListPhotoFacesRequest, runtime: $Util.RuntimeOptions): Promise<ListPhotoFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPhotoFacesResponse>(await this.doRPCRequest("ListPhotoFaces", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhotoFacesResponse({}));
  }

  async listPhotoFaces(request: ListPhotoFacesRequest): Promise<ListPhotoFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhotoFacesWithOptions(request, runtime);
  }

  async listPhotosWithOptions(request: ListPhotosRequest, runtime: $Util.RuntimeOptions): Promise<ListPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPhotosResponse>(await this.doRPCRequest("ListPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhotosResponse({}));
  }

  async listPhotos(request: ListPhotosRequest): Promise<ListPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhotosWithOptions(request, runtime);
  }

  async listPhotoStoresWithOptions(runtime: $Util.RuntimeOptions): Promise<ListPhotoStoresResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListPhotoStoresResponse>(await this.doRPCRequest("ListPhotoStores", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhotoStoresResponse({}));
  }

  async listPhotoStores(): Promise<ListPhotoStoresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhotoStoresWithOptions(runtime);
  }

  async listPhotoTagsWithOptions(request: ListPhotoTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListPhotoTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPhotoTagsResponse>(await this.doRPCRequest("ListPhotoTags", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListPhotoTagsResponse({}));
  }

  async listPhotoTags(request: ListPhotoTagsRequest): Promise<ListPhotoTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPhotoTagsWithOptions(request, runtime);
  }

  async listRegisteredTagsWithOptions(request: ListRegisteredTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListRegisteredTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRegisteredTagsResponse>(await this.doRPCRequest("ListRegisteredTags", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListRegisteredTagsResponse({}));
  }

  async listRegisteredTags(request: ListRegisteredTagsRequest): Promise<ListRegisteredTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegisteredTagsWithOptions(request, runtime);
  }

  async listTagPhotosWithOptions(request: ListTagPhotosRequest, runtime: $Util.RuntimeOptions): Promise<ListTagPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagPhotosResponse>(await this.doRPCRequest("ListTagPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagPhotosResponse({}));
  }

  async listTagPhotos(request: ListTagPhotosRequest): Promise<ListTagPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagPhotosWithOptions(request, runtime);
  }

  async listTagsWithOptions(request: ListTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagsResponse>(await this.doRPCRequest("ListTags", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagsResponse({}));
  }

  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  async listTimeLinePhotosWithOptions(request: ListTimeLinePhotosRequest, runtime: $Util.RuntimeOptions): Promise<ListTimeLinePhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTimeLinePhotosResponse>(await this.doRPCRequest("ListTimeLinePhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListTimeLinePhotosResponse({}));
  }

  async listTimeLinePhotos(request: ListTimeLinePhotosRequest): Promise<ListTimeLinePhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTimeLinePhotosWithOptions(request, runtime);
  }

  async listTimeLinesWithOptions(request: ListTimeLinesRequest, runtime: $Util.RuntimeOptions): Promise<ListTimeLinesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTimeLinesResponse>(await this.doRPCRequest("ListTimeLines", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ListTimeLinesResponse({}));
  }

  async listTimeLines(request: ListTimeLinesRequest): Promise<ListTimeLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTimeLinesWithOptions(request, runtime);
  }

  async mergeFacesWithOptions(request: MergeFacesRequest, runtime: $Util.RuntimeOptions): Promise<MergeFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MergeFacesResponse>(await this.doRPCRequest("MergeFaces", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new MergeFacesResponse({}));
  }

  async mergeFaces(request: MergeFacesRequest): Promise<MergeFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mergeFacesWithOptions(request, runtime);
  }

  async moveAlbumPhotosWithOptions(request: MoveAlbumPhotosRequest, runtime: $Util.RuntimeOptions): Promise<MoveAlbumPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveAlbumPhotosResponse>(await this.doRPCRequest("MoveAlbumPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new MoveAlbumPhotosResponse({}));
  }

  async moveAlbumPhotos(request: MoveAlbumPhotosRequest): Promise<MoveAlbumPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveAlbumPhotosWithOptions(request, runtime);
  }

  async moveFacePhotosWithOptions(request: MoveFacePhotosRequest, runtime: $Util.RuntimeOptions): Promise<MoveFacePhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveFacePhotosResponse>(await this.doRPCRequest("MoveFacePhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new MoveFacePhotosResponse({}));
  }

  async moveFacePhotos(request: MoveFacePhotosRequest): Promise<MoveFacePhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveFacePhotosWithOptions(request, runtime);
  }

  async reactivatePhotosWithOptions(request: ReactivatePhotosRequest, runtime: $Util.RuntimeOptions): Promise<ReactivatePhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReactivatePhotosResponse>(await this.doRPCRequest("ReactivatePhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ReactivatePhotosResponse({}));
  }

  async reactivatePhotos(request: ReactivatePhotosRequest): Promise<ReactivatePhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reactivatePhotosWithOptions(request, runtime);
  }

  async registerPhotoWithOptions(request: RegisterPhotoRequest, runtime: $Util.RuntimeOptions): Promise<RegisterPhotoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterPhotoResponse>(await this.doRPCRequest("RegisterPhoto", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterPhotoResponse({}));
  }

  async registerPhoto(request: RegisterPhotoRequest): Promise<RegisterPhotoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerPhotoWithOptions(request, runtime);
  }

  async registerTagWithOptions(request: RegisterTagRequest, runtime: $Util.RuntimeOptions): Promise<RegisterTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegisterTagResponse>(await this.doRPCRequest("RegisterTag", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new RegisterTagResponse({}));
  }

  async registerTag(request: RegisterTagRequest): Promise<RegisterTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerTagWithOptions(request, runtime);
  }

  async removeAlbumPhotosWithOptions(request: RemoveAlbumPhotosRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAlbumPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveAlbumPhotosResponse>(await this.doRPCRequest("RemoveAlbumPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveAlbumPhotosResponse({}));
  }

  async removeAlbumPhotos(request: RemoveAlbumPhotosRequest): Promise<RemoveAlbumPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAlbumPhotosWithOptions(request, runtime);
  }

  async removeFacePhotosWithOptions(request: RemoveFacePhotosRequest, runtime: $Util.RuntimeOptions): Promise<RemoveFacePhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveFacePhotosResponse>(await this.doRPCRequest("RemoveFacePhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveFacePhotosResponse({}));
  }

  async removeFacePhotos(request: RemoveFacePhotosRequest): Promise<RemoveFacePhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeFacePhotosWithOptions(request, runtime);
  }

  async renameAlbumWithOptions(request: RenameAlbumRequest, runtime: $Util.RuntimeOptions): Promise<RenameAlbumResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenameAlbumResponse>(await this.doRPCRequest("RenameAlbum", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new RenameAlbumResponse({}));
  }

  async renameAlbum(request: RenameAlbumRequest): Promise<RenameAlbumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameAlbumWithOptions(request, runtime);
  }

  async renameFaceWithOptions(request: RenameFaceRequest, runtime: $Util.RuntimeOptions): Promise<RenameFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenameFaceResponse>(await this.doRPCRequest("RenameFace", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new RenameFaceResponse({}));
  }

  async renameFace(request: RenameFaceRequest): Promise<RenameFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameFaceWithOptions(request, runtime);
  }

  async searchPhotosWithOptions(request: SearchPhotosRequest, runtime: $Util.RuntimeOptions): Promise<SearchPhotosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchPhotosResponse>(await this.doRPCRequest("SearchPhotos", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new SearchPhotosResponse({}));
  }

  async searchPhotos(request: SearchPhotosRequest): Promise<SearchPhotosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchPhotosWithOptions(request, runtime);
  }

  async setAlbumCoverWithOptions(request: SetAlbumCoverRequest, runtime: $Util.RuntimeOptions): Promise<SetAlbumCoverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAlbumCoverResponse>(await this.doRPCRequest("SetAlbumCover", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new SetAlbumCoverResponse({}));
  }

  async setAlbumCover(request: SetAlbumCoverRequest): Promise<SetAlbumCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAlbumCoverWithOptions(request, runtime);
  }

  async setFaceCoverWithOptions(request: SetFaceCoverRequest, runtime: $Util.RuntimeOptions): Promise<SetFaceCoverResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetFaceCoverResponse>(await this.doRPCRequest("SetFaceCover", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new SetFaceCoverResponse({}));
  }

  async setFaceCover(request: SetFaceCoverRequest): Promise<SetFaceCoverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setFaceCoverWithOptions(request, runtime);
  }

  async setMeWithOptions(request: SetMeRequest, runtime: $Util.RuntimeOptions): Promise<SetMeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetMeResponse>(await this.doRPCRequest("SetMe", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new SetMeResponse({}));
  }

  async setMe(request: SetMeRequest): Promise<SetMeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMeWithOptions(request, runtime);
  }

  async setQuotaWithOptions(request: SetQuotaRequest, runtime: $Util.RuntimeOptions): Promise<SetQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetQuotaResponse>(await this.doRPCRequest("SetQuota", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new SetQuotaResponse({}));
  }

  async setQuota(request: SetQuotaRequest): Promise<SetQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setQuotaWithOptions(request, runtime);
  }

  async tagPhotoWithOptions(request: TagPhotoRequest, runtime: $Util.RuntimeOptions): Promise<TagPhotoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagPhotoResponse>(await this.doRPCRequest("TagPhoto", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new TagPhotoResponse({}));
  }

  async tagPhoto(request: TagPhotoRequest): Promise<TagPhotoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagPhotoWithOptions(request, runtime);
  }

  async toggleFeaturesWithOptions(request: ToggleFeaturesRequest, runtime: $Util.RuntimeOptions): Promise<ToggleFeaturesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ToggleFeaturesResponse>(await this.doRPCRequest("ToggleFeatures", "2017-07-11", "HTTPS", "POST", "AK", "json", req, runtime), new ToggleFeaturesResponse({}));
  }

  async toggleFeatures(request: ToggleFeaturesRequest): Promise<ToggleFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.toggleFeaturesWithOptions(request, runtime);
  }

}
